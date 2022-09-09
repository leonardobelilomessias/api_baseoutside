import { AppError } from "../../../../shared/errors/AppError";
import { AdminMission } from "../../infra/typeorm/entities/AdminMission";
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository";
import { IMissionRepository } from "../../repositories/IMissonRepository";

class CreateAdminMissionUseCase{
  private adminmissionRepository: IAdminMissionRepository
  constructor(missionRepository: IAdminMissionRepository) {
    this.adminmissionRepository = missionRepository
  }
  async execute({id_mission,id_agent,type}):Promise<AdminMission> {
    if (!id_mission || !id_agent ||!type) throw new AppError("Some required value is undefined.")
    const agentParticipesMission = await this.adminmissionRepository.findAgentInMission({id_agent,id_mission})
    if(!agentParticipesMission) throw new AppError("Only agents that have beem participate of mission can be admins.")
    const alreadyAdmin = await this.adminmissionRepository.findAdminMission({id_agent,id_mission})
    if(alreadyAdmin) throw new AppError("Agent alredy is admin of this mission.")
    const createdAgent = await this.adminmissionRepository.createAdminMission({ id_agent, id_mission, type })

    return createdAgent
  }
}
export{CreateAdminMissionUseCase}
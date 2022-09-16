import { AppError } from "../../../../shared/errors/AppError";
import { AdminMission } from "../../infra/typeorm/entities/AdminMission";
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository";
import { IMissionRepository } from "../../repositories/IMissonRepository";

class CreateAdminMissionUseCase{
  private adminmissionRepository: IAdminMissionRepository
  constructor(adminMissionRepository: IAdminMissionRepository,) {
    this.adminmissionRepository = adminMissionRepository
    
  }
  async execute({id_agent_token,id_mission,id_agent,type}):Promise<AdminMission> {
    if (!id_mission || !id_agent ||!type) throw new AppError("Some required value is undefined.")
    const creatorMission = await this.adminmissionRepository.findCreatorMission(id_mission)
    if(creatorMission !== id_agent_token) throw new AppError("Agent authenticate dont have permission to create a admin ")
    const agentParticipesMission = await this.adminmissionRepository.findAgentInMission({id_agent,id_mission})
    if(!agentParticipesMission) throw new AppError("Only agents that have beem participate of mission can be admins.")
    const alreadyAdmin = await this.adminmissionRepository.findAdminMission({id_agent,id_mission})
    if(alreadyAdmin) throw new AppError("Agent alredy is admin of this mission.")
    const createdAgent = await this.adminmissionRepository.createAdminMission({ id_agent, id_mission, type })

    return createdAgent
  }
}
export{CreateAdminMissionUseCase}
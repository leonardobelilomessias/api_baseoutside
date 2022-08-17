import { AppError } from "../../../../shared/errors/AppError";
import { AdminMission } from "../../infra/typeorm/entities/AdminMission";
import { IAdminMission } from "../../repositories/IAdminMissionRepository";
import { IMissionRepository } from "../../repositories/IMissonRepository";

class CreateAdminMissionUseCase{
  private adminmissionRepository: IAdminMission
  constructor(missionRepository: IAdminMission) {
    this.adminmissionRepository = missionRepository
  }
  async execute({id_mission,id_agent,type}):Promise<AdminMission> {
    if (!id_mission || !id_agent) throw new AppError("Value of mission or agent is invalid")
    const createdAgent = await this.adminmissionRepository.createAdminMission({ id_agent, id_mission, type })
    return createdAgent
  }
}
export{CreateAdminMissionUseCase}
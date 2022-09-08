import { AppError } from "../../../../shared/errors/AppError"
import { AdminMission } from "../../infra/typeorm/entities/AdminMission"
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository"

class DeleteAdminMissionUseCase{
  private adminMissionRepository :IAdminMissionRepository
  constructor(adminMissionRepository :IAdminMissionRepository){
    this.adminMissionRepository = adminMissionRepository
  }
  async execute({id_agent,id_mission}):Promise<AdminMission>{
    if(!id_agent||!id_mission) throw new AppError("Some required value is undefined.")
    const deletedAdmin = await this.adminMissionRepository.deleteAdminMission({id_agent,id_mission})
    return deletedAdmin
  }
}
export{ DeleteAdminMissionUseCase}
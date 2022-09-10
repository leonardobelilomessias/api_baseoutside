import { AppError } from "../../../../shared/errors/AppError"
import { AdminMission } from "../../infra/typeorm/entities/AdminMission"
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository"

class UpdateAdminMissionUseCase{
  private adminMissionRepository :IAdminMissionRepository
  constructor(adminMissionRepository :IAdminMissionRepository){
    this.adminMissionRepository = adminMissionRepository
  }
  async execute({id_agent,id_mission,type}):Promise<AdminMission>{
    if(!id_agent||!id_mission||!type) throw new AppError("Some required value is undefined.")
    const editedAdmin = await this.adminMissionRepository.updateAdminMission({id_agent,id_mission,type})
    return editedAdmin
  } 

}
export{UpdateAdminMissionUseCase}
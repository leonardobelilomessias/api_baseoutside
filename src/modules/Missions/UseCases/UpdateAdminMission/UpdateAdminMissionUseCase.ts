import { AppError } from "../../../../shared/errors/AppError"
import { IInputUpdateAdminMissionDTO, IOutputUpdateAdminMissionDTO } from "../../dtos/IAdminMissionDTOS"
import { AdminMission } from "../../infra/typeorm/entities/AdminMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository"

class UpdateAdminMissionUseCase{
  private adminMissionRepository :IAdminMissionRepository
  private menagePermission :MenagerPermissionRespository
  constructor(adminMissionRepository :IAdminMissionRepository){
    this.adminMissionRepository = adminMissionRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent,id_mission,type, id_agent_token}:IInputUpdateAdminMissionDTO):Promise<IOutputUpdateAdminMissionDTO>{
    if(!id_agent||!id_mission||!type) throw new AppError("Some required value is undefined.")
    const findAdmin = await this.adminMissionRepository.findAdminMission({id_agent,id_mission})
    if(!findAdmin) throw new AppError("there isn't admin.")
    const isCreator = await this.menagePermission.confirmePermissionMission({id_agent_token,id_mission})
    if(isCreator?.id_creator !== id_agent_token) throw new AppError("Only creator of mission can update administrators.")
    const editedAdmin = await this.adminMissionRepository.updateAdminMission({id_agent,id_mission,type})
    return editedAdmin
  } 

}
export{UpdateAdminMissionUseCase}
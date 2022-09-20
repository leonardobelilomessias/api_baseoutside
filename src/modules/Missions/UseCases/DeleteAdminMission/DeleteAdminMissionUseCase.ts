import { AppError } from "../../../../shared/errors/AppError"
import { AdminMission } from "../../infra/typeorm/entities/AdminMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IAdminMissionRepository } from "../../repositories/IAdminMissionRepository"

class DeleteAdminMissionUseCase{
  private adminMissionRepository :IAdminMissionRepository
  private menagePremissionMissionRepository :MenagerPermissionRespository
  constructor(adminMissionRepository :IAdminMissionRepository){
    this.adminMissionRepository = adminMissionRepository
    this.menagePremissionMissionRepository= new MenagerPermissionRespository()
  }
  async execute({id_agent,id_mission, id_agent_token}):Promise<AdminMission>{
    if(!id_agent||!id_mission) throw new AppError("Some required value is undefined.")
    const alowDeleteadmin = await this.menagePremissionMissionRepository.confirmePermissionMission({id_agent_token})
    if(!alowDeleteadmin) throw new AppError("Agent authenticate haven't permission to execute this action or does not exist admin on mission.")
    const deletedAdmin = await this.adminMissionRepository.deleteAdminMission({ id_agent,id_mission})
    return deletedAdmin
  }
}
export{ DeleteAdminMissionUseCase}
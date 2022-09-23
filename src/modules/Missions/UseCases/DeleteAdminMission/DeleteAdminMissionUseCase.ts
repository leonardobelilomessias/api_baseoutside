import { AppError } from "../../../../shared/errors/AppError"
import { IOutputDeleteAdminMissionDTO } from "../../dtos/IAdminMissionDTOS"
import { IInputDeleteAgentMissionDTO } from "../../dtos/IAgentMissionDTOS"
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
  async execute({id_agent,id_mission, id_agent_token}:IInputDeleteAgentMissionDTO):Promise<IOutputDeleteAdminMissionDTO>{
    if(!id_agent||!id_mission) throw new AppError("Some required value is undefined.")
    const alowDeleteadmin = await this.menagePremissionMissionRepository.confirmePermissionMission({id_agent_token,id_mission})
    if(alowDeleteadmin?.id_creator !== id_agent_token && id_agent !==id_agent_token) throw new AppError("Agent authenticate haven't permission to execute this action or does not exist admin on mission.")
    const deletedAdmin = await this.adminMissionRepository.deleteAdminMission({ id_agent,id_mission})
    return deletedAdmin
  }
}
export{ DeleteAdminMissionUseCase}
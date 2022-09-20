import { AppError } from "../../../../shared/errors/AppError"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class DeleteWarningMissionUseCase{
  private warningsMissionRepository:IWarningsMissionRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(warningsMissionRepository:IWarningsMissionRepository){
    this.warningsMissionRepository = warningsMissionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({id,id_agent_token}):Promise<WarningsMission>{
    if(!id) throw new AppError("Value of warning is undefined.")
    const allowDeleteWarning = await this.menagePermissionMission.confirmePermissionMission({id_agent_token})
    if(!allowDeleteWarning) throw new AppError("Agent authentcated haven't autorization to execute that action.")
    const deletedWarnigMission = await this.warningsMissionRepository.delete(id)
    return deletedWarnigMission
  }
} 
export{DeleteWarningMissionUseCase}
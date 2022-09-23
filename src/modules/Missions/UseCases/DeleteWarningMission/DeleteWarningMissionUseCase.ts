import { AppError } from "../../../../shared/errors/AppError"
import { IInputDeleteWarning, IOutputGenericWarningsMissionDTOS } from "../../dtos/IWarningsMissionDTOS"
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
  async execute({id,id_agent_token}:IInputDeleteWarning):Promise<IOutputGenericWarningsMissionDTOS>{
    if(!id) throw new AppError("Value of warning is undefined.")
     const findWarning = await this.warningsMissionRepository.findById(id)
     if(!findWarning) throw new AppError("Warning not found")
    const allowDeleteWarning = await this.menagePermissionMission.confirmePermissionMission({id_agent_token,id_mission:findWarning.id_mission})
    if(!allowDeleteWarning) throw new AppError("Agent authentcated haven't autorization to execute that action.")
    const deletedWarnigMission = await this.warningsMissionRepository.delete(id)
    return deletedWarnigMission
  }
} 
export{DeleteWarningMissionUseCase}
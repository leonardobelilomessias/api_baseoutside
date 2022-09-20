import { AppError } from "../../../../shared/errors/AppError"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IEditWarningsMissionDTO, IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class UpdateWarningMissionUseCase{
  private warningMissionRepository:IWarningsMissionRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(warningMissionRepository:IWarningsMissionRepository){
    this.warningMissionRepository = warningMissionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token, id, title, content, priority, is_active, state, type }):Promise<WarningsMission>{
    if(!id)throw new AppError("Value of warning is undefined.")
    const allowEditWarning = await this.menagePermissionMission.confirmePermissionMission({id_agent_token})
    if(!allowEditWarning) throw new AppError("Agent authenticated haven't autorization to action.")
    const findWarning = await this.warningMissionRepository.findById(id)
    if(typeof priority !== typeof Number())throw new AppError("Value of priority must be a number.")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of type must be a number.")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
    if(typeof is_active !== typeof Boolean()&& !!is_active)throw new AppError("Value of is_active must be a number.")


    if(!findWarning)throw new AppError("Warning not found.")
    const editedWarningission = await this.warningMissionRepository.edit({ id, title, content, priority, is_active, state, type })
    return editedWarningission
  }
}
export{UpdateWarningMissionUseCase}
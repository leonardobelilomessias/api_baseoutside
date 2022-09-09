import { AppError } from "../../../../shared/errors/AppError"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { IEditWarningsMissionDTO, IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class UpdateWarningMissionUseCase{
  private warningMissionRepository:IWarningsMissionRepository
  constructor(warningMissionRepository:IWarningsMissionRepository){
    this.warningMissionRepository = warningMissionRepository
  }
  async execute({ id, title, content, priority, is_active, state, type }: IEditWarningsMissionDTO):Promise<WarningsMission>{
    if(!id)throw new AppError("Value of warning is undefined.")
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
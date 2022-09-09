import { AppError } from "../../../../shared/errors/AppError"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class DeleteWarningMissionUseCase{
  private warningsMissionRepository:IWarningsMissionRepository
  constructor(warningsMissionRepository:IWarningsMissionRepository){
    this.warningsMissionRepository = warningsMissionRepository
  }
  async execute(id:string):Promise<WarningsMission>{
    if(!id) throw new AppError("Value of warning is undefined.")
    const deletedWarnigMission = await this.warningsMissionRepository.delete(id)
    return deletedWarnigMission
  }
} 
export{DeleteWarningMissionUseCase}
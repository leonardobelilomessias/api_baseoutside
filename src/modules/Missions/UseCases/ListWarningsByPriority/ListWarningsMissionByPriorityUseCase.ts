import { AppError } from "../../../../shared/errors/AppError"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class ListWarningsMissionByPriorityUseCase{
  private warningsMissionRepository:IWarningsMissionRepository
  constructor(warningsMissionRepository:IWarningsMissionRepository){
    this.warningsMissionRepository = warningsMissionRepository
  }
  async execute({priority,id_mission}):Promise<WarningsMission[]>{
    if(!priority) throw new AppError("Value of Priority is undefined")
    if(typeof priority !== typeof Number()&& !!priority)throw new AppError("Value of Priority must be a number.")
    const listWarningsByPriority = this.warningsMissionRepository.listByPriority({priority,id_mission})
    return listWarningsByPriority
  }
}
export{ListWarningsMissionByPriorityUseCase}
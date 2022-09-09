import { AppError } from "../../../../../shared/errors/AppError"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository } from "../../../repositories/IWarningsActionRepository"

class ListWarningsActionByPriorityUseCase{
  private warningsActionRepository:IWarningsActionRepository
  constructor(warningsActionRepository:IWarningsActionRepository){
    this.warningsActionRepository = warningsActionRepository
  }
  async execute({priority,id_action}):Promise<WarningsAction[]>{
    if(!priority) throw new AppError("Value of Priority is undefined")
    if(typeof priority !== typeof Number()&& !!priority)throw new AppError("Value of Priority must be a number.")
    const listWarningsByPriority = this.warningsActionRepository.listByPriority({priority,id_action})
    return listWarningsByPriority
  }
}
export{ListWarningsActionByPriorityUseCase}
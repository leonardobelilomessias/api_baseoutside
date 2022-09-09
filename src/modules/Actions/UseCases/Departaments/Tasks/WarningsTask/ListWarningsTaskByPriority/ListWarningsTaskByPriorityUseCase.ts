import { AppError } from "../../../../../../../shared/errors/AppError"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { IWarningsTaskRepository } from "../../../../../repositories/IWarningsTaskRepository"


class ListWarningsTaskByPriorityUseCase{
  private warningsTaskRepository:IWarningsTaskRepository
  constructor(warningsTaskRepository:IWarningsTaskRepository){
    this.warningsTaskRepository = warningsTaskRepository
  }
  async execute({priority,id_task}):Promise<WarningsTask[]>{
    if(!priority) throw new AppError("Value of Priority is undefined")
    if(typeof priority !== typeof Number()&& !!priority)throw new AppError("Value of Priority must be a number.")
    const listWarningsByPriority = this.warningsTaskRepository.listByPriority({priority,id_task})
    return listWarningsByPriority
  }
}
export{ListWarningsTaskByPriorityUseCase}
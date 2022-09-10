import { AppError } from "../../../../../../../shared/errors/AppError"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { IWarningsTaskRepository } from "../../../../../repositories/IWarningsTaskRepository"

class ListWarningsTaskByStatusUseCase{
  private warningsTaskRepository:IWarningsTaskRepository
  constructor(warningsTaskRepository:IWarningsTaskRepository){
    this.warningsTaskRepository = warningsTaskRepository
  }
  async execute({state,id_task}):Promise<WarningsTask[]>{
    if(!state) throw new AppError("Value of status is undefined")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
    const listWarningsByStatus = this.warningsTaskRepository.listByStatus({state,id_task})
    return listWarningsByStatus
  }
}
export{ListWarningsTaskByStatusUseCase}
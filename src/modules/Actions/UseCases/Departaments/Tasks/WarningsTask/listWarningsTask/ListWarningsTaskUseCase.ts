import { AppError } from "../../../../../../../shared/errors/AppError"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { IWarningsTaskRepository } from "../../../../../repositories/IWarningsTaskRepository"

class ListWarningsTaskUseCase{
  private warningsTaskRepository:IWarningsTaskRepository
  constructor(warningsTaskRepository:IWarningsTaskRepository){
    this.warningsTaskRepository = warningsTaskRepository
  }
  async execute(id_task:string):Promise<WarningsTask[]>{
    if(!id_task) throw new AppError("Value of Task is undefined")
    const listWarnings = this.warningsTaskRepository.listByIdTask(id_task)
    return listWarnings
  }
}
export{ListWarningsTaskUseCase}
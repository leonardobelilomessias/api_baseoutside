import { AppError } from "../../../../../../../shared/errors/AppError"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { IWarningsTaskRepository } from "../../../../../repositories/IWarningsTaskRepository"


class ListWarningsTaskByTypeUseCase{
  private warningsTaskRepository:IWarningsTaskRepository
  constructor(warningsTaskRepository:IWarningsTaskRepository){
    this.warningsTaskRepository = warningsTaskRepository
  }
  async execute({type,id_task}):Promise<WarningsTask[]>{
    if(!type) throw new AppError("Value of Type is undefined")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of Type must be a number.")
    const listWarningsByType = this.warningsTaskRepository.listByType({type,id_task})
    return listWarningsByType
  }
}
export{ListWarningsTaskByTypeUseCase}
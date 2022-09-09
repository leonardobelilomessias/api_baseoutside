import { AppError } from "../../../../../../../shared/errors/AppError"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { IWarningsTaskRepository } from "../../../../../repositories/IWarningsTaskRepository"

class DeleteWarningTaskUseCase{
  private warningsTaskRepository:IWarningsTaskRepository
  constructor(warningsTaskRepository:IWarningsTaskRepository){
    this.warningsTaskRepository = warningsTaskRepository
  }
  async execute(id:string):Promise<WarningsTask>{
    if(!id) throw new AppError("Value of warning is undefined.")
    const deletedWarnigTask = await this.warningsTaskRepository.delete(id)
    return deletedWarnigTask
  }
} 
export{DeleteWarningTaskUseCase}
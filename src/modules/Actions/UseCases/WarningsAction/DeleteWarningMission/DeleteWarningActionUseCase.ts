import { AppError } from "../../../../../shared/errors/AppError"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository } from "../../../repositories/IWarningsActionRepository"


class DeleteWarningActionUseCase{
  private warningsActionRepository:IWarningsActionRepository
  constructor(warningsActionRepository:IWarningsActionRepository){
    this.warningsActionRepository = warningsActionRepository
  }
  async execute(id:string):Promise<WarningsAction>{
    if(!id) throw new AppError("Value of warning is undefined.")
    const deletedWarnigAction = await this.warningsActionRepository.delete(id)
    return deletedWarnigAction
  }
} 
export{DeleteWarningActionUseCase}
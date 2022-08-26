import { AppError } from "../../../../shared/errors/AppError"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository } from "../../repositories/IActionRepository"


class CancelActionUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }
  async execute(id:string):Promise<Action>{
    if(!id)throw new AppError("Value of id acttion is undefined.")
    const foundAction = await this.actionRepository.findById(id)
    if(!foundAction) throw new AppError("Action not found")
    const canceledAction = await this.actionRepository.delete(foundAction)
    return canceledAction
  }
}
export{CancelActionUseCase}
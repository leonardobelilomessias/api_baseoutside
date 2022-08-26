import { AppError } from "../../../../shared/errors/AppError"
import { IActionRepository, IUpdateAction } from "../../repositories/IActionRepository"

class UpdateActionUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }
  async execute({ id, name,description,date_start,date_end,value,state,local}:IUpdateAction){
    if(!id) throw new AppError("Value of id mission is undefined")
    const foundAction = await this.actionRepository.findById(id)
    if(!foundAction) throw new AppError("Action not found.")
    Object.assign(foundAction,{ name,description,date_start,date_end,value,state,local})
    const updateAction  = await this.actionRepository.edit(foundAction)
    return updateAction
  }
}
export{UpdateActionUseCase}
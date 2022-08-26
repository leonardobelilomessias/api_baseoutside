import { AppError } from "../../../../shared/errors/AppError"
import { IActionRepository, IUpdateAction } from "../../repositories/IActionRepository"

class UpdateActionUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }
  async execute({ id_action, name,description,date_start,date_end,value,state,local}:IUpdateAction){
    if(!id_action) throw new AppError("Value of id mission is undefined")
    const foundAction = await this.actionRepository.findById(id_action)
    if(!foundAction) throw new AppError("Action not found.")
    const updateAction  = await this.actionRepository.edit({ id_action, name,description,date_start,date_end,value,state,local})
    return updateAction
  }
}
export{UpdateActionUseCase}
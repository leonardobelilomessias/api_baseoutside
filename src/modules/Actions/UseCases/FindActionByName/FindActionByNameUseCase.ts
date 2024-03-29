import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericActionDTO } from "../../dtos/IActionDTOS"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository } from "../../repositories/IActionRepository"

class FindActionByNameUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }
  async execute(name:string):Promise<IOutputGenericActionDTO[]>{
    if(!name) throw new AppError("Name action undefined")
    const foundAction  = await this.actionRepository.findByName(name)
    return foundAction
  }
}
export{FindActionByNameUseCase}
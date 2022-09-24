import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericActionDTO } from "../../dtos/IActionDTOS"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository } from "../../repositories/IActionRepository"

class FindActionByLocalUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }
  async execute(local:string):Promise<IOutputGenericActionDTO[]>{
    if(!local) throw new AppError("Value of local is invalid")
    const foundAction = await this.actionRepository.findByLocal(local)
    return foundAction
  }
}
export{FindActionByLocalUseCase}
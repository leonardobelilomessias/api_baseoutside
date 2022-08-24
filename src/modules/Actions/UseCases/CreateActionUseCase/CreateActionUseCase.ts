import { AppError } from "../../../../shared/errors/AppError"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository, ICreateAction } from "../../repositories/IActionRepository"


class CreateActionUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }

  async execute({name,description,date_start,date_end,value,mission}:ICreateAction):Promise<Action>{
    if(!name || !description || !mission) throw new AppError("Sent invalid value")
    const newAction = await this.actionRepository.create({name,description,date_start,date_end,value,mission})
    return newAction
  }
}

export{CreateActionUseCase}
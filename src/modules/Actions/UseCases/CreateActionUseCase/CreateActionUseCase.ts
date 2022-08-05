

import { Action } from "../../infra/typeorm/entities/Action"
import { DTOActionRepository, ICreateAction } from "../../repositories/IActionRepository"


class CreateActionUseCase{
  private actionRepository: DTOActionRepository
  constructor(actionRepository: DTOActionRepository) {
    this.actionRepository = actionRepository
  }

  async execute({name,description,date_start,date_end,value,mission}:ICreateAction): Promise<Action>{
    const action = await this.actionRepository.create({ name, description, date_start, date_end, value, mission })
    return action
  }

}

export{CreateActionUseCase}
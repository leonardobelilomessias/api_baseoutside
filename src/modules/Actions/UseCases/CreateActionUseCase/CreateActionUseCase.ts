import { ActionRepository } from "../../ActionsRepository/ActionRepository"
import { DTOActionRepository, ICreateAction } from "../../ActionsRepository/DTOActionRepository"
import { Action } from "../../Entity/Action"

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
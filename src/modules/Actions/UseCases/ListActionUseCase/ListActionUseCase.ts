import { ActionRepository } from "../../ActionsRepository/ActionRepository";
import { Action } from "../../Entity/Action";


class ListActionUseCase{
  private actionRepository:ActionRepository

  constructor(actionRepository: ActionRepository) {
    this.actionRepository = actionRepository
  }
  async execute(): Promise<Action[]>{
    const allAction = await this.actionRepository.list()
    return allAction
  }

}

export{ListActionUseCase}
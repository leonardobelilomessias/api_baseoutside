import { Action } from "../../infra/typeorm/entities/Action"
import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository"



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
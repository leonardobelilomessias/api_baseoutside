import { IOutputGenericActionDTO } from "../../dtos/IActionDTOS"
import { Action } from "../../infra/typeorm/entities/Action"
import { ActionRepository } from "../../infra/typeorm/repositories/ActionRepository"

class ListActionUseCase{
  private actionRepository:ActionRepository

  constructor(actionRepository: ActionRepository) {
    this.actionRepository = actionRepository
  }
  async execute(): Promise<IOutputGenericActionDTO[]>{
    const allAction = await this.actionRepository.listAll()
    return allAction
  }

}

export{ListActionUseCase}
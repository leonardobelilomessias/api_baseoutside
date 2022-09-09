import { AppError } from "../../../../shared/errors/AppError"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository } from "../../repositories/IActionRepository"

class ListActionByMissionUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }
  async execute(id_mission:string):Promise<Action[]>{ 
    if(!id_mission)throw new AppError("Value of mission is undefined.")
    const findActionsByMission = await this.actionRepository.findByIdMission(id_mission)
    return findActionsByMission
  }
}
export{ListActionByMissionUseCase}
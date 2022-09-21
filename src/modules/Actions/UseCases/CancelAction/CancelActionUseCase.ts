import { AppError } from "../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository } from "../../repositories/IActionRepository"


class CancelActionUseCase{
  private actionRepository:IActionRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({id,id_agent_token}):Promise<Action>{
    if(!id)throw new AppError("Value of id acttion is undefined.")
    const foundAction = await this.actionRepository.findById(id)
    if(!foundAction) throw new AppError("Action not found")
    console.log(foundAction)
    const allowActivit = await this.menagePermissionMission.confirmePermissionAction({id_agent_token, id_action:id})
    if(!allowActivit) throw new AppError("Agent authenticate haven't autorization to action")
    const canceledAction = await this.actionRepository.delete(foundAction)
    return canceledAction
  }
}
export{CancelActionUseCase}
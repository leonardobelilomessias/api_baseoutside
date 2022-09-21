import { AppError } from "../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IActionRepository, IUpdateAction } from "../../repositories/IActionRepository"

class UpdateActionUseCase{
  private actionRepository:IActionRepository
  private menagePermissionMission :MenagerPermissionRespository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({ id_agent_token,id, name,description,date_start,date_end,value,state,local}){
    if(!id) throw new AppError("Value of id mission is undefined")
    const allowUpdate = await this.menagePermissionMission.confirmePermissionAction({id_action:id,id_agent_token})
    if(!allowUpdate) throw new AppError("Agent authenticate dosent authorizated to action.")
    const foundAction = await this.actionRepository.findById(id)
    if(!foundAction) throw new AppError("Action not found.")
    Object.assign(foundAction,{ name,description,date_start,date_end,value,state,local})
    const updateAction  = await this.actionRepository.edit(foundAction)
    return updateAction
  } 
}
export{UpdateActionUseCase}
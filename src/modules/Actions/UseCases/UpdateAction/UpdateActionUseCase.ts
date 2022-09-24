import { AppError } from "../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputUpdateActionDTO, IIOutputUpdateActionDTO } from "../../dtos/IActionDTOS"
import { IActionRepository } from "../../repositories/IActionRepository"

class UpdateActionUseCase{
  private actionRepository:IActionRepository
  private menagePermissionMission :MenagerPermissionRespository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({ id_agent_token,id, name,description,date_start,date_end,state,local}:IInputUpdateActionDTO):Promise<IIOutputUpdateActionDTO>{
    if(!id) throw new AppError("Value of id mission is undefined")
    const foundAction = await this.actionRepository.findById(id)
    if(!foundAction) throw new AppError("Action not found.")
    const allowUpdate = await this.menagePermissionMission.confirmePermissionAction({id_action:id,id_agent_token})
    if(!allowUpdate) throw new AppError("Agent authenticate dosent authorizated to action.")
    Object.assign(foundAction,{ name,description,date_start,date_end,state,local})
    const updateAction  = await this.actionRepository.edit(foundAction as IIOutputUpdateActionDTO)
    return updateAction
  } 
}
export{UpdateActionUseCase}
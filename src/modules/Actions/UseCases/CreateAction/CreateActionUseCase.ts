import { AppError } from "../../../../shared/errors/AppError"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository} from "../../repositories/IActionRepository"

import {DateProvider} from '../../../../utils/providers/DateProvider/DayJsProvider/DateProvider'
import { MenagerPermissionRespository } from "../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputCreateActionDTO, IOutputCreateActionDTO } from "../../dtos/IActionDTOS"
class CreateActionUseCase{
  private actionRepository:IActionRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(actionRepository:IActionRepository){
    this.menagePermissionMission = new MenagerPermissionRespository()
    this.actionRepository = actionRepository
  }

  async execute({id_agent_token,creator,name,description,date_start,date_end,id_mission,local,state}:IInputCreateActionDTO):Promise<IOutputCreateActionDTO>{
    const minimunDateStart = 24
    const minimunDateEnd = 48
    const dateNow = DateProvider.dateNow()
    if(!name || !description || !id_mission) throw new AppError("Sent invalid value")
    const allowCreateAction = await this.menagePermissionMission.confirmePermissionMission({id_agent_token,id_mission})
    if(!allowCreateAction || id_agent_token !==creator) throw new AppError("Agent Authenticated haven't authorization to action..")
    const compareDateStart = DateProvider.compairInHours(date_start,dateNow)
    const compareDateEnd = DateProvider.compairInHours(date_end,dateNow)
    if(compareDateStart < minimunDateStart) throw new AppError(" minimund date Start is 24 hours")
    if(compareDateEnd < minimunDateEnd) throw new AppError(" minimund date Start is 48 hours")
    const newAction = await this.actionRepository.create({state,creator,name,description,date_start,date_end,id_mission,local})
    return newAction
  }
}

export{CreateActionUseCase}
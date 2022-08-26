import { AppError } from "../../../../shared/errors/AppError"
import { Action } from "../../infra/typeorm/entities/Action"
import { IActionRepository, ICreateAction } from "../../repositories/IActionRepository"

import {DateProvider} from '../../../../utils/providers/DateProvider/DayJsProvider/DateProvider'
class CreateActionUseCase{
  private actionRepository:IActionRepository
  constructor(actionRepository:IActionRepository){
    this.actionRepository = actionRepository
  }

  async execute({name,description,date_start,date_end,value,id_mission,local}:ICreateAction):Promise<Action>{
    const minimunDateStart = 24
    const minimunDateEnd = 48
    const dateNow = DateProvider.dateNow()
    if(!name || !description || !id_mission) throw new AppError("Sent invalid value")
    const compareDateStart = DateProvider.compairInHours(date_start,dateNow)
    const compareDateEnd = DateProvider.compairInHours(date_end,dateNow)
    if(compareDateStart < minimunDateStart) throw new AppError(" minimund date Start is 24 hours")
    if(compareDateEnd < minimunDateEnd) throw new AppError(" minimund date Start is 48 hours")
    const newAction = await this.actionRepository.create({name,description,date_start,date_end,value,id_mission,local})
    return newAction
  }
}

export{CreateActionUseCase}
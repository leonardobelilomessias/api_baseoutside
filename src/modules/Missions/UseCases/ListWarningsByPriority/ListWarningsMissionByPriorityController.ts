import { Request, Response } from "express"
import { ListWarningsMissionByPriorityUseCase } from "./ListWarningsMissionByPriorityUseCase"

class ListWarningsMissionBySatusController{
  private listwarnigsMissionUseCase:ListWarningsMissionByPriorityUseCase
  constructor(listwarnigsMissionUseCase:ListWarningsMissionByPriorityUseCase){
    this.listwarnigsMissionUseCase = listwarnigsMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {priority,id_mission} = request.body
    const listWarningsByPriority = await this.listwarnigsMissionUseCase.execute({priority,id_mission})
    return response.status(200).json(listWarningsByPriority)
  }
}
export{ListWarningsMissionBySatusController}
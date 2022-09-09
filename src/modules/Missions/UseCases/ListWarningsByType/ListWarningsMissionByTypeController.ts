import { Request, Response } from "express"
import { ListWarningsMissionByTypeUseCase } from "./ListWarningsMissionByTypeUseCase"

class ListWarningsMissionBySatusController{
  private listwarnigsMissionUseCase:ListWarningsMissionByTypeUseCase
  constructor(listwarnigsMissionUseCase:ListWarningsMissionByTypeUseCase){
    this.listwarnigsMissionUseCase = listwarnigsMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {type,id_mission} = request.body
    const listWarningsByType = await this.listwarnigsMissionUseCase.execute({type,id_mission})
    return response.status(200).json(listWarningsByType)
  }
}
export{ListWarningsMissionBySatusController}
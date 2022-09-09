import { Request, Response } from "express"
import { ListWarningsMissionByStatusUseCase } from "./ListWarningsMissionByStatusUseCase"

class ListWarningsMissionBySatusController{
  private listwarnigsMissionUseCase:ListWarningsMissionByStatusUseCase
  constructor(listwarnigsMissionUseCase:ListWarningsMissionByStatusUseCase){
    this.listwarnigsMissionUseCase = listwarnigsMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {state,id_mission} = request.body
    const listWarningsByStatus = await this.listwarnigsMissionUseCase.execute({state,id_mission})
    return response.status(200).json(listWarningsByStatus)
  }
}
export{ListWarningsMissionBySatusController}
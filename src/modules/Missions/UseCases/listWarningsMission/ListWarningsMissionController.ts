import { Request, Response } from "express"
import { ListWarningsMissionUseCase } from "./ListWarningsMissionUseCase"

class ListWarningsMissionController{
  private listwarnigsMissionUseCase:ListWarningsMissionUseCase
  constructor(listwarnigsMissionUseCase:ListWarningsMissionUseCase){
    this.listwarnigsMissionUseCase = listwarnigsMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission} = request.body
    const id_agent_token = request.user.id
    const listWarnings = await this.listwarnigsMissionUseCase.execute({id_mission, id_agent_token})
    return response.status(200).json(listWarnings)
  }
}
export{ListWarningsMissionController}
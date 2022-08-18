import { Request, Response } from "express"
import { ListAgentsMissionUseCase } from "./ListAgentsMissionUseCase"

class ListAgentsMissionController{
  private listAgentsMissionUseCase:ListAgentsMissionUseCase
  constructor(listAgentsMissionUseCase: ListAgentsMissionUseCase) {
    this.listAgentsMissionUseCase = listAgentsMissionUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const {id_mission} = request.body
    const listagentsMission = await this.listAgentsMissionUseCase.execute(id_mission) 
    return response.status(200).json(listagentsMission)
  }
}
export{ListAgentsMissionController}
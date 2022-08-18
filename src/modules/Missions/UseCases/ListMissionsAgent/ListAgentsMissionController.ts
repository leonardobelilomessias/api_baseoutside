import { Request, Response } from "express"
import { ListMissionsAgentUseCase } from "./ListMissionsAgentUseCase"


class ListMissionsAgentController{
private listMissionsAgentUseCase:ListMissionsAgentUseCase
  constructor(listMissionsAgentUseCase: ListMissionsAgentUseCase) {
    this.listMissionsAgentUseCase = listMissionsAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const {id_agent} = request.body
    const listMisionsAgent = await this.listMissionsAgentUseCase.execute(id_agent) 
    return response.status(200).json(listMisionsAgent)
  }
}
export{ListMissionsAgentController}
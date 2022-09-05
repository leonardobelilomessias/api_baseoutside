import { Request, Response } from "express"
import { ListAgentsActionUseCase } from "./ListAgentsActionUseCase"

class ListAgentActionController{
  private listAgentActionUseCase:ListAgentsActionUseCase
  constructor(listAgentActionUseCase:ListAgentsActionUseCase){
    this.listAgentActionUseCase = listAgentActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_action} = request.body
    const agentsAction = await this.listAgentActionUseCase.execute(id_action)
    return response.status(200).json(agentsAction)
  }
}
export{ListAgentActionController}
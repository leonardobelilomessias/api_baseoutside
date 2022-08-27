import { Request, Response } from "express"
import { CreateAgentActionUseCase } from "./CreateAgentActionUseCase"


class CreateAgentActionController{
  private createAgentActionUseCase:CreateAgentActionUseCase
  constructor(createAgentActionUseCase:CreateAgentActionUseCase){
    this.createAgentActionUseCase = createAgentActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_action,id_agent} = request.body
    const agentAction = await this.createAgentActionUseCase.execute({id_action,id_agent})
    return response.status(200).json(agentAction)
  }
}
export{CreateAgentActionController}
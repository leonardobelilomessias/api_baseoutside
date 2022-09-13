import { Request, Response } from "express"
import { CreateCardAgentUseCase } from "./CreateCardAgentUseCase"

class CreateCardAgentController{
  private createCardAgentUseCase:CreateCardAgentUseCase
  constructor(createCardAgentUseCase:CreateCardAgentUseCase){
    this.createCardAgentUseCase = createCardAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,description,title} = request.body
    const id_agent_token = request.user.id
    const createCardAgent = await this.createCardAgentUseCase.execute({id_agent_token, id_agent,description,title})
    return response.status(200).json(createCardAgent)
  }
}
export{CreateCardAgentController}
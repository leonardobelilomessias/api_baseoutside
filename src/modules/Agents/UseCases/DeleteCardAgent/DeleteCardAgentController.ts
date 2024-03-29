import { Request, Response } from "express"
import { DeleteCardAgentUseCase } from "./DeleteCardAgentUseCase"


class DeleteCardAgentController{
  private deleteCardAgentUseCase:DeleteCardAgentUseCase
  constructor(deleteCardAgentUseCase:DeleteCardAgentUseCase){
    this.deleteCardAgentUseCase = deleteCardAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{ 
    const{id_agent} = request.body
    const id_agent_token = request.user.id
    const deletedAgent = await this.deleteCardAgentUseCase.execute({id_agent_token, id_agent})
    return response.status(200).json(deletedAgent)
  }
}
export{DeleteCardAgentController}
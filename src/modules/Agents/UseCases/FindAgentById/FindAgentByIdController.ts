import { Request, Response } from "express"
import { FindAgentByIdUseCase } from "./FindAgentByIdUseCase"

class FindAgentByIdController{
  private findAgentByIdUseCase:FindAgentByIdUseCase
  constructor(findAgentByIdUseCase:FindAgentByIdUseCase){
    this.findAgentByIdUseCase = findAgentByIdUseCase
  }
  async handle(request:Request,response:Response){
    const {id_agent} = request.body
    const agentById = await this.findAgentByIdUseCase.execute(id_agent)
    return response.status(200).json(agentById)
  }
}
export{FindAgentByIdController}
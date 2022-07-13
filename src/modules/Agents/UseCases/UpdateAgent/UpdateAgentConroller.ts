import { Request, Response } from "express"
import { Agent } from "../../Entities/Agent"
import { EditAgent } from "../../Repository/DTOAgentRepository"
import { UpdateAgentUseCase } from "./UpdateAgentUseCase"

class UpdateAgentController{
  private updateAgentUseCase: UpdateAgentUseCase
  constructor(updateAgentUseCase:UpdateAgentUseCase) {
    this.updateAgentUseCase = updateAgentUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {id ,name,description,email}:EditAgent = request.body
    const agentEdited = await this.updateAgentUseCase.execute({ id, name, description, email })
    return response.status(201).json(agentEdited)
  }

}

export{UpdateAgentController}
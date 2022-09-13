import { Request, Response } from "express"
import { EditAgent } from "../../repositories/IAgentRepository"
import { UpdateAgentUseCase } from "./UpdateAgentUseCase"

class UpdateAgentController{
  private updateAgentUseCase: UpdateAgentUseCase
  constructor(updateAgentUseCase:UpdateAgentUseCase) {
    this.updateAgentUseCase = updateAgentUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, name, description, email, interests, skills,vocation }: EditAgent = request.body
    const id_agent_token = request.user.id
     const agentEdited = await this.updateAgentUseCase.execute({id_agent_token, id, name, description, email,interests,skills ,vocation})
    return response.status(201).json(agentEdited)
  }
}

export{UpdateAgentController}
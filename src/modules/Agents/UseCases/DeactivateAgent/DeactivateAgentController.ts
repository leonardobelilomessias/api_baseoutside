import { Request, Response } from "express"
import { DeactivateAgentUseCase } from "./DeactivateAgentUseCase"

class DeactivateAgentController{
  private deactivateAgentUseCase:DeactivateAgentUseCase
  constructor(deactivateAgentUseCase) {
    this.deactivateAgentUseCase = deactivateAgentUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {id,password} = request.body
    const id_agent_token = request.user.id
    const agentWillBeDeactivate = await this.deactivateAgentUseCase.execute({id_agent_token ,id,password})
    return response.status(200).json(agentWillBeDeactivate)
  }
}

export { DeactivateAgentController}
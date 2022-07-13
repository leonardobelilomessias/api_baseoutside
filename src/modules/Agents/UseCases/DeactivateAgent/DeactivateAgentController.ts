import { Request, Response } from "express"
import { DeactivateAgentUseCase } from "./DeactivateAgentUseCase"

class DeactivateAgentController{
  private deactivateAgentUseCase:DeactivateAgentUseCase
  constructor(deactivateAgentUseCase) {
    this.deactivateAgentUseCase = deactivateAgentUseCase
  }

  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.body
    const agentWillBeDeactivate = await this.deactivateAgentUseCase.execute({id})
    return response.status(200).json(agentWillBeDeactivate)
  }
}

export { DeactivateAgentController}
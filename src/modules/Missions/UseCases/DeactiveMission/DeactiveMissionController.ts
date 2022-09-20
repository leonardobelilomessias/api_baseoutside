import { Request, Response } from "express"
import { DeactivateMissionUseCase } from "./DeactiveMissionUseCase"

class DeactiveMissionController{
  private deactivateMissionUseCase: DeactivateMissionUseCase
  constructor(deactivateMissionUseCase: DeactivateMissionUseCase) {
    this.deactivateMissionUseCase = deactivateMissionUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { id } = request.body
    const id_agent_token = request.user.id
    const deactivateMision = await this.deactivateMissionUseCase.execute({id, id_agent_token})
    return response.status(200).json(deactivateMision)
  }
}
export{DeactiveMissionController}
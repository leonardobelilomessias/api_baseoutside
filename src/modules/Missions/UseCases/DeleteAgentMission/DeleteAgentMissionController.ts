import { Request, Response } from "express"
import { DeleteAgentMissionUseCase } from "./DeleteAgentMissionUseCase"

class DeleteAgentMissionController{
  private deleteAgentMissionUseCase: DeleteAgentMissionUseCase
  constructor(deleteAgentMissionUseCase: DeleteAgentMissionUseCase) {
    this.deleteAgentMissionUseCase = deleteAgentMissionUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { id_agent, id_mission } = request.body
    const deletedAgentMission = await this.deleteAgentMissionUseCase.execute(id_agent, id_mission)
    return response.status(200).json(deletedAgentMission)
  }
}
export{DeleteAgentMissionController}
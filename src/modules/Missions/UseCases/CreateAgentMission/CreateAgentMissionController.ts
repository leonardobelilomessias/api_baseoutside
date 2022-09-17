import { Request, Response } from "express"
import { CreateAgentMissionUseCase } from "./CreateAgentMissionUseCase"

class CreateAgentMissionController{
  constructor(private createAgentMissionUseCase: CreateAgentMissionUseCase) {
    this.createAgentMissionUseCase= createAgentMissionUseCase
  }
  async handle(request: Request, response: Response): Promise<Response>{
    const { id_agent, id_mission } = request.body
    const  id_agent_token = request.user.id
    const createAgentMission = await this.createAgentMissionUseCase.execute({id_agent_token,id_mission, id_agent})
    return response.status(200).json(createAgentMission)
  }

}
export{CreateAgentMissionController}
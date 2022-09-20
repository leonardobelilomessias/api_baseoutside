import { Request, Response } from "express"
import { UpdateWarningMissionUseCase } from "./UpdateWarningMissionUseCase"

class UpdateWarningMissionController{
  private updateWarningMissionUseCase:UpdateWarningMissionUseCase
  constructor(updateWarningMissionUseCase:UpdateWarningMissionUseCase){
    this.updateWarningMissionUseCase = updateWarningMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, title, content, priority, is_active, state, type } = request.body
    const id_agent_token = request.user.id
    const editedWarningMission = await this.updateWarningMissionUseCase.execute({id_agent_token, id, title, content, priority, is_active, state, type }) 
    return response.status(200).json(editedWarningMission)
  }
}
export{UpdateWarningMissionController}
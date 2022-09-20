import { Request, Response } from "express"
import { DeleteWarningMissionUseCase } from "./DeleteWarningMissionUseCase"

class DeleteWarningMissionController{
  private deletewarningMissionUseCase:DeleteWarningMissionUseCase
  constructor(deletewarningMissionUseCase:DeleteWarningMissionUseCase){
    this.deletewarningMissionUseCase = deletewarningMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const id_agent_token = request.user.id
    const deletedWarnigMission = await this.deletewarningMissionUseCase.execute({id,id_agent_token})
    return response.status(200).json(deletedWarnigMission)
  }
}
export{DeleteWarningMissionController}
import { Request, Response } from "express"
import { DeleteCardMissionUseCase } from "./DeleteCardMissionUseCase"


class DeleteCardMissionController{
  private deleteCardMissionUseCase:DeleteCardMissionUseCase
  constructor(deleteCardMissionUseCase:DeleteCardMissionUseCase){
    this.deleteCardMissionUseCase = deleteCardMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{ 
    const{id_mission} = request.body
    const id_agent_token = request.user.id
    const deletedMission = await this.deleteCardMissionUseCase.execute({id_agent_token,id_mission})
    return response.status(200).json(deletedMission)
  }
}
export{DeleteCardMissionController}
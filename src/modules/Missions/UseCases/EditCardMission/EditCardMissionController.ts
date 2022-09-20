import { Request, Response } from "express"
import { EditCardMissionUseCase } from "./EditCardMissionUseCase"

class EditCardMissionController{
  private editCardMissionRepository:EditCardMissionUseCase
  constructor(editCardMissionRepository:EditCardMissionUseCase){
    this.editCardMissionRepository = editCardMissionRepository
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission,title,description} = request.body
    const id_agent_token = request.user.id
    const editMission =await  this.editCardMissionRepository.execute({id_agent_token,id_mission,title,description})
    return response.status(200).json(editMission)
  }
}
export{EditCardMissionController}
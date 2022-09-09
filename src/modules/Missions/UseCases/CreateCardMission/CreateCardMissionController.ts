import { Request, Response } from "express"
import { CreateCardMissionUseCase } from "./CreateCardMissionUseCase"

class CreateCardMissionController{
  private createCardMissionUseCase:CreateCardMissionUseCase
  constructor(createCardMissionUseCase:CreateCardMissionUseCase){
    this.createCardMissionUseCase = createCardMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission,description,title} = request.body
    const createCardMission = await this.createCardMissionUseCase.execute({id_mission,description,title})
    return response.status(200).json(createCardMission)
  }
}
export{CreateCardMissionController}
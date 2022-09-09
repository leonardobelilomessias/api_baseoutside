import { Request, Response } from "express"
import { FindCardMissionUseCase } from "./FindCardMissionUseCase"

class FindCardMissionController{
  private findCardMissionUseCase:FindCardMissionUseCase
  constructor(findCardMissionUseCase:FindCardMissionUseCase){
    this.findCardMissionUseCase = findCardMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission} = request.body 
    const findCardMission =await  this.findCardMissionUseCase.execute(id_mission)
    return response.status(200).json(findCardMission)
  }
}
export{FindCardMissionController}
import { Request, Response } from "express"
import { ListActionByMissionUseCase } from "./ListActionByMissionUseCase"

class ListActionByMissionController{
  private listActionByMissionUseCase:ListActionByMissionUseCase
  constructor(listActionByMissionUseCase:ListActionByMissionUseCase){
    this.listActionByMissionUseCase = listActionByMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission} = request.body
    const listByIdMission = await this.listActionByMissionUseCase.execute(id_mission)
    return response.status(200).json(listByIdMission)
  }

}
export{ListActionByMissionController}
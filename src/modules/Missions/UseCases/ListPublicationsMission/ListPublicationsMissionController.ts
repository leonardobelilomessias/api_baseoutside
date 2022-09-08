import { Request, Response } from "express"
import { ListPublicationsMissionUseCase } from "./ListPublicationsMission"

class ListPublicationsMissionController {
  private listPublicationMissionUseCase:ListPublicationsMissionUseCase
  constructor(listPublicationMissionUseCase:ListPublicationsMissionUseCase){
    this.listPublicationMissionUseCase = listPublicationMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{ 
    const {id_mission}= request.body
    const listPublications = await this.listPublicationMissionUseCase.execute(id_mission)
    return response.status(200).json(listPublications)
  }
}
export{ListPublicationsMissionController}
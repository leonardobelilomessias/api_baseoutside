import { Request, Response } from "express"
import { ListJourneysMissionUseCase } from "../ListJourneysMissionUseCase/ListJourneysMssionUseCase"


class ListJourneyMissionController{
  private listJourneyMissionUseCase:ListJourneysMissionUseCase
  constructor(listJourneyMissionUseCase:ListJourneysMissionUseCase){
    this.listJourneyMissionUseCase = listJourneyMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission} = request.body
    const listJourneys = await this.listJourneyMissionUseCase.execute(id_mission)
    return response.status(200).json(listJourneys)
  }
}
export{ListJourneyMissionController}
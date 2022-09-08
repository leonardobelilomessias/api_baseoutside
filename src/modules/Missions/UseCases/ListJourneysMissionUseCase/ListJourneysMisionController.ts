import { Request, Response } from "express";
import { ListJourneysMissionUseCase } from "./ListJourneysMssionUseCase";


class ListJourneysMissionController{
  private listJourneysMissionUseCase:ListJourneysMissionUseCase
  constructor(listJourneysMissionUseCase:ListJourneysMissionUseCase){
    this.listJourneysMissionUseCase = listJourneysMissionUseCase
  }
  async handle(request:Request,response:Response){
    const {id_Mission} = request.body
    const journeysMission = this.listJourneysMissionUseCase.execute(id_Mission)
    return response.status(200).json(journeysMission)
  }
}

export{ListJourneysMissionController}
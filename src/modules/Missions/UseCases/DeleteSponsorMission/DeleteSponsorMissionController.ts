import { Request, Response } from "express"
import { DeleteSponsorMissionUseCase } from "./DeleteSponsorMissionUseCase"

class DeleteSponsorMissionController {
  private deleteSponsorMissionUseCase:DeleteSponsorMissionUseCase
  constructor(deleteSponsorMissionUseCase:DeleteSponsorMissionUseCase){
    this.deleteSponsorMissionUseCase = deleteSponsorMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const{id_sponsor,id_mission} = request.body
    const deleteSponsorMission = await this.deleteSponsorMissionUseCase.execute({id_sponsor,id_mission})
    return response.status(200).json(deleteSponsorMission)
  }
}
export{DeleteSponsorMissionController}
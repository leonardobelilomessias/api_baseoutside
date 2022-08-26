import { Request, Response } from "express"
import { CreateSponsorMissionUseCase } from "./CreateSponsorMissionUseCase"

class CreateSponsorMissionController{
  private createSponsorMissionUseCase:CreateSponsorMissionUseCase
  constructor(createSponsorMissionUseCase:CreateSponsorMissionUseCase) {
    this.createSponsorMissionUseCase = createSponsorMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
    const { id_sponsor, id_mission ,type,sponsor_private,mission_private} = request.body
    const createSponsorMission = await this.createSponsorMissionUseCase.execute({ id_sponsor, id_mission ,type,sponsor_private,mission_private})
    return response.status(200).json(createSponsorMission)
  }
}
export{CreateSponsorMissionController}
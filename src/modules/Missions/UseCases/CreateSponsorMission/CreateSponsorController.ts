import { Request, Response } from "express"
import { CreateSponsorMissionUseCase } from "./CreateSponsorMissionUseCase"

class CreateSponsorMissionController{
  private createSponsorMissionUseCase:CreateSponsorMissionUseCase
  constructor(createSponsorMissionUseCase:CreateSponsorMissionUseCase) {
    this.createSponsorMissionUseCase = createSponsorMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
    const { id_sponsor, id_mission ,type,sponsor_private,mission_private,value} = request.body
    const id_agent_token = request.user.id
    const createSponsorMission = await this.createSponsorMissionUseCase.execute({id_agent_token, id_sponsor, id_mission ,type,sponsor_private,mission_private,value})
    return response.status(200).json(createSponsorMission)
  }
}
export{CreateSponsorMissionController}
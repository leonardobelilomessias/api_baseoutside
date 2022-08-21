import { Request, Response } from "express"
import { ListSponsorsMissionUseCase } from "./ListSponsorsMissionUseCase"


class ListSponsorsMissionController{
  private listSponsorsMissionUseCase:ListSponsorsMissionUseCase
  constructor(listSponsorsMissionUseCase:ListSponsorsMissionUseCase){
    this.listSponsorsMissionUseCase = listSponsorsMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_mission} = request.body
    const sponsorsMission = await this.listSponsorsMissionUseCase.execute(id_mission)
    return response.status(200).json(sponsorsMission)
  }
}
export{ListSponsorsMissionController}
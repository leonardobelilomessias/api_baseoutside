import { Request, Response } from "express"
import { ListMissionsSponsorUsecase } from "./ListMissionsSponsorUseCase"

class ListMissionsSponsorController{
  private listMissionsSponsorUseCase:ListMissionsSponsorUsecase
  constructor(listMissionsSponsorUseCase:ListMissionsSponsorUsecase){
    this.listMissionsSponsorUseCase = listMissionsSponsorUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const{id_sponsor} = request.body
    const missionsSponsor = await this.listMissionsSponsorUseCase.execute(id_sponsor)
    return response.status(200).json(missionsSponsor)
  }
}
export{ListMissionsSponsorController}
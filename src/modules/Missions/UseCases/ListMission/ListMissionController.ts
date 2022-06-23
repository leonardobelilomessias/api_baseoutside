import { Request, Response } from "express"
import { ListMissionUseCase } from "./ListMissionUseCase"


class ListMissionController{
  private listMissionUseCase: ListMissionUseCase
  constructor(listMissionUseCase:ListMissionUseCase) {
    this.listMissionUseCase = listMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
    const allMission = await this.listMissionUseCase.execute()
    return response.status(200).json(allMission)
  }

}

export{ListMissionController}
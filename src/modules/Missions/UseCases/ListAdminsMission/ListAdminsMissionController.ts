import { Request, Response } from "express"
import { ListAdminsMissionUseCase } from "./ListAdminsMissionUseCase"

class ListAdminsMissionController{
  private listAdminsMissionUseCase:ListAdminsMissionUseCase
  constructor(listAdminsMissionUseCase:ListAdminsMissionUseCase){
    this.listAdminsMissionUseCase = listAdminsMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{ 
    const {id_mission} = request.body
    const foundAdmininMission = await this.listAdminsMissionUseCase.execute(id_mission)
    return response.status(200).json(foundAdmininMission)
  }
}
export{ListAdminsMissionController}
import { Request, Response } from "express"
import { AdminMission } from "../../infra/typeorm/entities/AdminMission"
import { CreateAdminMissionUseCase } from "./CreateAdminMissionUseCase"

class CreateAdminMissionController{
  private createAdminMissionUseCase:CreateAdminMissionUseCase
  constructor(createAdminMissionUseCase:CreateAdminMissionUseCase){
    this.createAdminMissionUseCase = createAdminMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,id_mission,type} = request.body
    const createAdminMission = await this.createAdminMissionUseCase.execute({id_agent,type,id_mission})
    return response.status(200).json(createAdminMission)
  }
}
export{CreateAdminMissionController}
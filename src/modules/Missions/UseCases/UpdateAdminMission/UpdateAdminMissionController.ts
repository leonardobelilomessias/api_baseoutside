import { Request, Response } from "express"
import { UpdateAdminMissionUseCase } from "./UpdateAdminMissionUseCase"

class UpdateAdminMissionContrller{
  private updateAdminMissionUseCase:UpdateAdminMissionUseCase
  constructor(updateAdminMissionUseCase:UpdateAdminMissionUseCase){
    this.updateAdminMissionUseCase = updateAdminMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,id_mission,type} = request.body
    const id_agent_token = request.user.id

    const updateMission = await this.updateAdminMissionUseCase.execute({id_agent_token, id_agent,id_mission,type})
    return response.status(200).json(updateMission)
  }
}
export{UpdateAdminMissionContrller}
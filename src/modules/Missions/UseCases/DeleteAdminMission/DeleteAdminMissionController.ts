import { Request, Response } from "express";
import { AdminMission } from "../../infra/typeorm/entities/AdminMission";
import { DeleteAdminMissionUseCase } from "./DeleteAdminMissionUseCase";

class DeleteAdminController{
  private deleteAdminMissionUseCase:DeleteAdminMissionUseCase
  constructor(deleteAdminMissionUseCase:DeleteAdminMissionUseCase){
    this.deleteAdminMissionUseCase = deleteAdminMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,id_mission } = request.body
    const id_agent_token = request.user.id
    const adminDeleted = await this.deleteAdminMissionUseCase.execute({id_agent_token,id_agent,id_mission})
    return response.status(200).json(adminDeleted)
  }
}
export{DeleteAdminController}
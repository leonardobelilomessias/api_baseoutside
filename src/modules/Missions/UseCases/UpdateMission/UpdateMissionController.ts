import { Request, Response } from "express";
import { UpdateMissionUseCase } from "./UpdateMissionUseCase";

class UpdateMissionController{
  private updateMissionUseCase: UpdateMissionUseCase
  constructor(updateMissionUseCase: UpdateMissionUseCase) {
    this.updateMissionUseCase = updateMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, name, description, image_profile, date_end, date_start, duration, is_private, local, type, field } = request.body
    const id_agent_token = request.user.id
    const updateMission = await this.updateMissionUseCase.execute({ id_agent_token, id, name, description, image_profile, date_end, date_start, duration, is_private, local, type, field })
    return response.status(201).json(updateMission)
  }
}
export{UpdateMissionController}
import { Request, Response } from "express";
import { UpdateMissionUseCase } from "./UpdateMissionUseCase";

class UpdateMissionController{
  private updateMissionUseCase: UpdateMissionUseCase
  constructor(updateMissionUseCase: UpdateMissionUseCase) {
    this.updateMissionUseCase = updateMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type, field } = request.body
    const updateMission = await this.updateMissionUseCase.execute({ id, name, description, creator, image_profile, date_end, date_start, duration, is_private, local, type, field })
    return response.status(201).json(updateMission)
  }
}
export{UpdateMissionController}
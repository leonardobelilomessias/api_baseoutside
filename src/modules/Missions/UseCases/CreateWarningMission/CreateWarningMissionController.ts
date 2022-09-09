import { Request, Response } from "express"
import { CreateWarningMissionUseCase } from "./CreateWarningMissionUseCase"

class CreaterWarningMissionController{
  private createWarningMissionUseCase:CreateWarningMissionUseCase
  constructor(createWarningMissionUseCase:CreateWarningMissionUseCase){
    this.createWarningMissionUseCase = createWarningMissionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id_mission, id_creator, title, content, priority, is_active, state, type }= request.body
    const createdWarning = await this.createWarningMissionUseCase.execute({ id_mission, id_creator, title, content, priority, is_active, state, type })
    return response.status(200).json(createdWarning)

  }
}
export{ CreaterWarningMissionController}
import { Request,Response } from "express";
import { CreateActionUseCase } from "./CreateActionUseCase";


class CreateActionController{
  private createActionUseCase:CreateActionUseCase
  constructor(createActionUseCase:CreateActionUseCase){
  this.createActionUseCase = createActionUseCase  
  }

  async handle(request:Request,response:Response){
    const { name, description, date_start, date_end, value, id_mission,local ,creator} = request.body
    const id_agent_token = request.user.id
    const newAction = await this.createActionUseCase.execute({ id_agent_token,creator, name, description, date_start, date_end,  id_mission,local })
    return response.status(200).json(newAction)
  }
}
export{CreateActionController}
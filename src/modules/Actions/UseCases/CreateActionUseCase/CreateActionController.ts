import { Request,Response } from "express";
import { CreateActionUseCase } from "./CreateActionUseCase";


class CreateActionController{
  private createActionUseCase:CreateActionUseCase
  constructor(createActionUseCase:CreateActionUseCase){
  this.createActionUseCase = createActionUseCase  
  }

  async handle(request:Request,response:Response){
    const { name, description, date_start, date_end, value, id_mission,local } = request.body
    const newAction = await this.createActionUseCase.execute({ name, description, date_start, date_end, value, id_mission,local })
    return response.status(200).json(newAction)
  }
}
export{CreateActionController}
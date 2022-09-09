import { Request, Response } from "express"
import { UpdateWarningTaskUseCase } from "./UpdateWarningTaskUseCase"

class UpdateWarningTaskController{
  private updateWarningTaskUseCase:UpdateWarningTaskUseCase
  constructor(updateWarningTaskUseCase:UpdateWarningTaskUseCase){
    this.updateWarningTaskUseCase = updateWarningTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, title, content, priority, is_active, state, type } = request.body
    const editedWarningTask = await this.updateWarningTaskUseCase.execute({ id, title, content, priority, is_active, state, type }) 
    return response.status(200).json(editedWarningTask)
  }
}
export{UpdateWarningTaskController}
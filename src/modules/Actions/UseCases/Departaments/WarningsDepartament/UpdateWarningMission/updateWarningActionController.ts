import { Request, Response } from "express"
import { UpdateWarningActionUseCase } from "./UpdateWarningActionUseCase"

class UpdateWarningActionController{
  private updateWarningActionUseCase:UpdateWarningActionUseCase
  constructor(updateWarningActionUseCase:UpdateWarningActionUseCase){
    this.updateWarningActionUseCase = updateWarningActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, title, content, priority, is_active, state, type } = request.body
    const editedWarningAction = await this.updateWarningActionUseCase.execute({ id, title, content, priority, is_active, state, type }) 
    return response.status(200).json(editedWarningAction)
  }
}
export{UpdateWarningActionController}
import { Request, Response } from "express"
import { UpdateWarningDepartamentUseCase } from "./UpdateWarningDepartamentUseCase"

class UpdateWarningDepartamentController{
  private updateWarningDepartamentUseCase:UpdateWarningDepartamentUseCase
  constructor(updateWarningDepartamentUseCase:UpdateWarningDepartamentUseCase){
    this.updateWarningDepartamentUseCase = updateWarningDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, title, content, priority, is_active, state, type } = request.body
    const id_agent_token = request.user?.id
    const editedWarningDepartament = await this.updateWarningDepartamentUseCase.execute({id_agent_token, id, title, content, priority, is_active, state, type }) 
    return response.status(200).json(editedWarningDepartament)
  }
}
export{UpdateWarningDepartamentController}
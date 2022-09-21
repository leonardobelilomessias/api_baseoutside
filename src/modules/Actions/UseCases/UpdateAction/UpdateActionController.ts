import { Request, Response } from "express"
import { UpdateActionUseCase } from "./UpdateActionUseCase"

class UpdateActionController{
  private updateActionUseCase:UpdateActionUseCase
  constructor(updateActionUseCase:UpdateActionUseCase){
    this.updateActionUseCase = updateActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, name,description,date_start,date_end,value,state,local} = request.body
    const id_agent_token = request.user.id
    const updatedAction = await this.updateActionUseCase.execute({id_agent_token, id, name,description,date_start,date_end,value,state,local})
    return response.status(200).json(updatedAction)
  }
}
export{UpdateActionController}
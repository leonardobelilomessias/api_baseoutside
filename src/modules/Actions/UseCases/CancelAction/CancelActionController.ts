import { Request, Response } from "express"
import { CancelActionUseCase } from "./CancelActionUseCase"

class CancelActionController{
  private cancelActionUseCase:CancelActionUseCase
  constructor(cancelActionUseCase:CancelActionUseCase){
    this.cancelActionUseCase = cancelActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body    
    const id_agent_token = request.user.id
    
    const canceledAction = await this.cancelActionUseCase.execute({id,id_agent_token})
    return response.status(200).json(canceledAction)
  }
}
export{CancelActionController}
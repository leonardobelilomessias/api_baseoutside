import { Request, Response } from "express"
import { CancelActionUseCase } from "./CancelActionUseCase"

class CancelActionController{
  private cancelActionUseCase:CancelActionUseCase
  constructor(cancelActionUseCase:CancelActionUseCase){
    this.cancelActionUseCase = cancelActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const canceledAction = await this.cancelActionUseCase.execute(id)
    return response.status(200).json(canceledAction)
  }
}
export{CancelActionController}
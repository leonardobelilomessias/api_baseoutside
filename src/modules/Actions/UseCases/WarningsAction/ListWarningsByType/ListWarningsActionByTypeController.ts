import { Request, Response } from "express"
import { ListWarningsActionByTypeUseCase } from "./ListWarningsActionByTypeUseCase"

class ListWarningsActionBySatusController{
  private listwarnigsActionUseCase:ListWarningsActionByTypeUseCase
  constructor(listwarnigsActionUseCase:ListWarningsActionByTypeUseCase){
    this.listwarnigsActionUseCase = listwarnigsActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {type,id_action} = request.body
    const listWarningsByType = await this.listwarnigsActionUseCase.execute({type,id_action})
    return response.status(200).json(listWarningsByType)
  }
}
export{ListWarningsActionBySatusController}
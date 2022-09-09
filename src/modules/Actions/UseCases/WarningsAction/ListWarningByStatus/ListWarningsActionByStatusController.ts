import { Request, Response } from "express"
import { ListWarningsActionByStatusUseCase } from "./ListWarningsActionByStatusUseCase"

class ListWarningsActionBySatusController{
  private listwarnigsActionUseCase:ListWarningsActionByStatusUseCase
  constructor(listwarnigsActionUseCase:ListWarningsActionByStatusUseCase){
    this.listwarnigsActionUseCase = listwarnigsActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {state,id_action} = request.body
    const listWarningsByStatus = await this.listwarnigsActionUseCase.execute({state,id_action})
    return response.status(200).json(listWarningsByStatus)
  }
}
export{ListWarningsActionBySatusController}
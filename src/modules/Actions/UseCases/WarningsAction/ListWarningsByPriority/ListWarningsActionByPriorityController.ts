import { Request, Response } from "express"
import { ListWarningsActionByPriorityUseCase } from "./ListWarningsActionByPriorityUseCase"

class ListWarningsActionBySatusController{
  private listwarnigsActionUseCase:ListWarningsActionByPriorityUseCase
  constructor(listwarnigsActionUseCase:ListWarningsActionByPriorityUseCase){
    this.listwarnigsActionUseCase = listwarnigsActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {priority,id_action} = request.body
    const listWarningsByPriority = await this.listwarnigsActionUseCase.execute({priority,id_action})
    return response.status(200).json(listWarningsByPriority)
  }
}
export{ListWarningsActionBySatusController}
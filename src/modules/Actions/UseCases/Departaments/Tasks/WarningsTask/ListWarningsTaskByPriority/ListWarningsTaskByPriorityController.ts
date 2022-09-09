import { Request, Response } from "express"
import { ListWarningsTaskByPriorityUseCase } from "./ListWarningsTaskByPriorityUseCase"

class ListWarningsTaskBySatusController{
  private listwarnigsTaskUseCase:ListWarningsTaskByPriorityUseCase
  constructor(listwarnigsTaskUseCase:ListWarningsTaskByPriorityUseCase){
    this.listwarnigsTaskUseCase = listwarnigsTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {priority,id_task} = request.body
    const listWarningsByPriority = await this.listwarnigsTaskUseCase.execute({priority,id_task})
    return response.status(200).json(listWarningsByPriority)
  }
}
export{ListWarningsTaskBySatusController}
import { Request, Response } from "express"
import { ListWarningsTaskByStatusUseCase } from "./ListWarningsTaskByStatusUseCase"

class ListWarningsTaskBySatusController{
  private listwarnigsTaskUseCase:ListWarningsTaskByStatusUseCase
  constructor(listwarnigsTaskUseCase:ListWarningsTaskByStatusUseCase){
    this.listwarnigsTaskUseCase = listwarnigsTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {state,id_task} = request.body
    const listWarningsByStatus = await this.listwarnigsTaskUseCase.execute({state,id_task})
    return response.status(200).json(listWarningsByStatus)
  }
}
export{ListWarningsTaskBySatusController}
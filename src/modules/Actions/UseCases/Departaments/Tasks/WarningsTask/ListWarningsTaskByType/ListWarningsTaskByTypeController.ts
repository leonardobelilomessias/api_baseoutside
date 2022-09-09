import { Request, Response } from "express"
import { ListWarningsTaskByTypeUseCase } from "./ListWarningsTaskByTypeUseCase"

class ListWarningsTaskBySatusController{
  private listwarnigsTaskUseCase:ListWarningsTaskByTypeUseCase
  constructor(listwarnigsTaskUseCase:ListWarningsTaskByTypeUseCase){
    this.listwarnigsTaskUseCase = listwarnigsTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {type,id_task} = request.body
    const listWarningsByType = await this.listwarnigsTaskUseCase.execute({type,id_task})
    return response.status(200).json(listWarningsByType)
  }
}
export{ListWarningsTaskBySatusController}
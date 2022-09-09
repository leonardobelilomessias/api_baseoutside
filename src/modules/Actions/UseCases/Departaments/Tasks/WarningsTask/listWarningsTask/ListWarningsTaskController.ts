import { Request, Response } from "express"
import { ListWarningsTaskUseCase } from "./ListWarningsTaskUseCase"

class ListWarningsTaskController{
  private listwarnigsTaskUseCase:ListWarningsTaskUseCase
  constructor(listwarnigsTaskUseCase:ListWarningsTaskUseCase){
    this.listwarnigsTaskUseCase = listwarnigsTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_task} = request.body
    const listWarnings = await this.listwarnigsTaskUseCase.execute(id_task)
    return response.status(200).json(listWarnings)
  }
}
export{ListWarningsTaskController}
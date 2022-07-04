import { Request, Response } from "express"
import { ListTaskUseCase } from "./ListTaskUseCase"

class ListTaskController{
  private listTaskUseCase: ListTaskUseCase
  constructor(listTaskUseCase) {
    this.listTaskUseCase = listTaskUseCase
  }
  async handle(request:Request,response:Response): Promise<Response>{
    const alltasks = await this.listTaskUseCase.execute() 
    return response.status(200).json(alltasks)
  }

}
export{ListTaskController}
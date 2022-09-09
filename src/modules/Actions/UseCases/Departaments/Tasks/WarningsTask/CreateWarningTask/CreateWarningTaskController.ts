import { Request, Response } from "express"
import { CreateWarningTaskUseCase } from "./CreateWarningTaskUseCase"

class CreaterWarningTaskController{
  private createWarningTaskUseCase:CreateWarningTaskUseCase
  constructor(createWarningTaskUseCase:CreateWarningTaskUseCase){
    this.createWarningTaskUseCase = createWarningTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id_task, id_creator, title, content, priority, is_active, state, type }= request.body
    const createdWarning = await this.createWarningTaskUseCase.execute({ id_task, id_creator, title, content, priority, is_active, state, type })
    return response.status(200).json(createdWarning)

  }
}
export{ CreaterWarningTaskController}
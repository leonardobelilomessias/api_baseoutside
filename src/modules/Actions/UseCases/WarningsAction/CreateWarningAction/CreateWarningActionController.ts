import { Request, Response } from "express"
import { CreateWarningActionUseCase } from "./CreateWarningActionUseCase"

class CreaterWarningActionController{
  private createWarningActionUseCase:CreateWarningActionUseCase
  constructor(createWarningActionUseCase:CreateWarningActionUseCase){
    this.createWarningActionUseCase = createWarningActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id_action, id_creator, title, content, priority, is_active, state, type }= request.body
    const createdWarning = await this.createWarningActionUseCase.execute({ id_action, id_creator, title, content, priority, is_active, state, type })
    return response.status(200).json(createdWarning)

  }
}
export{ CreaterWarningActionController}
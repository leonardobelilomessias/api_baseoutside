import { Request, Response } from "express"
import { CreateWarningDepartamentUseCase } from "./CreateWarningDepartamentUseCase"

class CreaterWarningDepartamentController{
  private createWarningDepartamentUseCase:CreateWarningDepartamentUseCase
  constructor(createWarningDepartamentUseCase:CreateWarningDepartamentUseCase){
    this.createWarningDepartamentUseCase = createWarningDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id_departament, id_creator, title, content, priority, is_active, state, type }= request.body
    const id_agent_token = request.user?.id
    const createdWarning = await this.createWarningDepartamentUseCase.execute({ id_agent_token,id_departament, id_creator, title, content, priority, is_active, state, type })
    return response.status(200).json(createdWarning)

  }
}
export{ CreaterWarningDepartamentController}
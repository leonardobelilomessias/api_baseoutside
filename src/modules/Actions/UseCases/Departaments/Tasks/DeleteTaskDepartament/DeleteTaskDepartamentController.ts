import { Request, Response } from "express"
import { DeleteTaskDepartamentUseCase } from "./DeleteTaskDepartamentUseCase"


class DeleteTaskDepartamentController{
  private deleteTaskDepartamentUseCase:DeleteTaskDepartamentUseCase
  constructor(deleteTaskDepartamentUseCase:DeleteTaskDepartamentUseCase){
    this.deleteTaskDepartamentUseCase = deleteTaskDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const id_agent_token = request.user?.id
    const deleteTaskDepartament = await this.deleteTaskDepartamentUseCase.execute({id_agent_token,id})
    return response.status(200).json(deleteTaskDepartament)
  }
}
export{DeleteTaskDepartamentController}
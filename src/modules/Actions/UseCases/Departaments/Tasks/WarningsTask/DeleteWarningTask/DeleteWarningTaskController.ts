import { Request, Response } from "express"
import { DeleteWarningTaskUseCase } from "./DeleteWarningTaskUseCase"

class DeleteWarningTaskController{
  private deletewarningTaskUseCase:DeleteWarningTaskUseCase
  constructor(deletewarningTaskUseCase:DeleteWarningTaskUseCase){
    this.deletewarningTaskUseCase = deletewarningTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const id_agent_token = request.user?.id
    const deletedWarnigTask = await this.deletewarningTaskUseCase.execute({id,id_agent_token})
    return response.status(200).json(deletedWarnigTask)
  }
}
export{DeleteWarningTaskController}
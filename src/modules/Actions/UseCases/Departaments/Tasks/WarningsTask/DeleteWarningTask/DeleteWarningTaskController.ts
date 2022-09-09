import { Request, Response } from "express"
import { DeleteWarningTaskUseCase } from "./DeleteWarningTaskUseCase"

class DeleteWarningTaskController{
  private deletewarningTaskUseCase:DeleteWarningTaskUseCase
  constructor(deletewarningTaskUseCase:DeleteWarningTaskUseCase){
    this.deletewarningTaskUseCase = deletewarningTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const deletedWarnigTask = await this.deletewarningTaskUseCase.execute(id)
    return response.status(200).json(deletedWarnigTask)
  }
}
export{DeleteWarningTaskController}
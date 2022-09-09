import { Request, Response } from "express"
import { DeleteWarningActionUseCase } from "./DeleteWarningActionUseCase"

class DeleteWarningActionController{
  private deletewarningActionUseCase:DeleteWarningActionUseCase
  constructor(deletewarningActionUseCase:DeleteWarningActionUseCase){
    this.deletewarningActionUseCase = deletewarningActionUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const deletedWarnigAction = await this.deletewarningActionUseCase.execute(id)
    return response.status(200).json(deletedWarnigAction)
  }
}
export{DeleteWarningActionController}
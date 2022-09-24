import { Request, Response } from "express"
import { DeleteWarningDepartamentUseCase } from "./DeleteWarningDepartamentUseCase"

class DeleteWarningDepartamentController{
  private deletewarningDepartamentUseCase:DeleteWarningDepartamentUseCase
  constructor(deletewarningDepartamentUseCase:DeleteWarningDepartamentUseCase){
    this.deletewarningDepartamentUseCase = deletewarningDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const id_agent_token = request.user?.id
    const deletedWarnigDepartament = await this.deletewarningDepartamentUseCase.execute({id_agent_token,id})
    return response.status(200).json(deletedWarnigDepartament)
  }
}
export{DeleteWarningDepartamentController}
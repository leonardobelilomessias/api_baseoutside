import { Request, Response } from "express"
import { DeleteDepartamentUseCase } from "./DeleteDepartamentUseCase"

class DeleteDepartamentController{
  private deleteDepartamentUseCase:DeleteDepartamentUseCase
  constructor(deleteDepartamentUseCase:DeleteDepartamentUseCase){
    this.deleteDepartamentUseCase = deleteDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id} = request.body
    const id_agent_token = request.user?.id
    const deleteDepartament = await this.deleteDepartamentUseCase.execute({id_agent_token,id})
    return response.status(200).json(deleteDepartament)
  }
}
export{DeleteDepartamentController}
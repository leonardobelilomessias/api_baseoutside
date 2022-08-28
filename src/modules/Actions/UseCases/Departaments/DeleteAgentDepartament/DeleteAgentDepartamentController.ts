import { Request, Response } from "express"
import { DeleteAgentDepartamentUseCase } from "./DeleteAgentDepartamentUseCase"


class DeleteAgentDepartamentController{
  private deleteAgentDepartamentUseCase:DeleteAgentDepartamentUseCase
  constructor(deleteAgentDepartamentUseCase:DeleteAgentDepartamentUseCase){
    this.deleteAgentDepartamentUseCase = deleteAgentDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,id_departament} = request.body
    const deleteAgentDepartament = await this.deleteAgentDepartamentUseCase.execute({id_agent,id_departament})
    return response.status(200).json(deleteAgentDepartament)
  }
}
export{DeleteAgentDepartamentController}
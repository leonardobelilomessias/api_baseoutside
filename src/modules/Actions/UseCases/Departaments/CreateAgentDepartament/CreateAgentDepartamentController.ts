import { Request, Response } from "express"
import { CreateAgentDepartamentUseCase } from "./CreateAgentDepartamentuseCase"


class CreateAgentDepartamentController{
  private createAgentDepartamentUseCase:CreateAgentDepartamentUseCase
  constructor(createAgentDepartamentUseCase:CreateAgentDepartamentUseCase){
    this.createAgentDepartamentUseCase = createAgentDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,id_departament} = request.body
    const createdAgentDepartament = await this.createAgentDepartamentUseCase.execute({id_agent,id_departament})
    return response.status(200).json(createdAgentDepartament)
  }
}
export{CreateAgentDepartamentController}
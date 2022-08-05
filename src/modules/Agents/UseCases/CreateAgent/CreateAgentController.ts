import { Request, Response } from "express"
import { CreateAgentUseCase } from "../../../agents/UseCases/CreateAgent/CreateAgentUseCase"



interface IRequest{
  name: string
  email: string
  password:string
}

class CreateAgentController{
  private createAgentUseCase: CreateAgentUseCase
  constructor(createAgentUseCase:CreateAgentUseCase) {
    this.createAgentUseCase = createAgentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
    const {name,email,password} = request.body

    const agent = await this.createAgentUseCase.execute({ name, email, password })
    return response.status(201).json(agent) 
  }

}
export{CreateAgentController}
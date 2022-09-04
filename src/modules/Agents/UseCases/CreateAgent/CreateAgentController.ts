import { Request, Response } from "express"
import { CreateAgentUseCase } from "../../../Agents/UseCases/CreateAgent/CreateAgentUseCase"

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
    const {name,email,user_name,password,vocation,description} = request.body
    const agent = await this.createAgentUseCase.execute({ name, email,user_name, password,vocation,description })
    return response.status(201).json(agent) 
  }

}
export{CreateAgentController}
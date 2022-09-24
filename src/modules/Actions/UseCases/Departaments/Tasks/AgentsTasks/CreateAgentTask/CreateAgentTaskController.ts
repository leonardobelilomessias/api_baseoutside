import { Request, Response } from "express"
import { CreateAgentTaskUseCase } from "./CreateAgentTaskUseCase"

class CreateAgentTaskController{
  private createAgentTaskUseCase:CreateAgentTaskUseCase
  constructor(createAgentTaskUseCase:CreateAgentTaskUseCase){
    this.createAgentTaskUseCase = createAgentTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_agent,id_task} = request.body
    const createAgentTask = await this.createAgentTaskUseCase.execute({id_agent,id_task})
    return response.status(200).json(createAgentTask)
  }
}
export{CreateAgentTaskController}
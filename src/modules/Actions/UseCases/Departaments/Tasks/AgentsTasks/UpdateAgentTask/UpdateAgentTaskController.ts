import { Request, Response } from "express"
import { UpdateAgentTaskUseCase } from "./UpdateAgentTaskUseCase"

class UpdateAgentTaksController{
  private updateAgentTaskUseCase:UpdateAgentTaskUseCase
  constructor(updateAgentTaskUseCase:UpdateAgentTaskUseCase){
    this.updateAgentTaskUseCase = updateAgentTaskUseCase
  }
  async handle(request:Request,response:Response){
    const {id_agent,id_task,state} = request.body
    const updateAgentTask = await this.updateAgentTaskUseCase.execute({id_agent,id_task,state})
    return response.status(200).json(updateAgentTask)
  }
}
export{UpdateAgentTaksController}
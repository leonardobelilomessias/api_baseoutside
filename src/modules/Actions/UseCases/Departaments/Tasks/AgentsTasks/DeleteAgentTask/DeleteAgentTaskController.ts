import { Request, Response } from "express"
import { DeleteAgentTaskUseCase } from "./DeleteAgentTaskUseCase"

class DeleteAgentTaskController{
  private deleteAgentTastkUseCase:DeleteAgentTaskUseCase
  constructor(deleteAgentTastkUseCase:DeleteAgentTaskUseCase){
    this.deleteAgentTastkUseCase = deleteAgentTastkUseCase
  }
  async handle(request:Request,response:Response){
    const {id_agent,id_task} = request.body
    const deleteAgentTask = await this.deleteAgentTastkUseCase.execute({id_agent,id_task})
    return response.status(200).json(deleteAgentTask)
  }
}
export{DeleteAgentTaskController}
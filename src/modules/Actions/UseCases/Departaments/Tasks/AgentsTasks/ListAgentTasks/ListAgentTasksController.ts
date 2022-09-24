import { Request, Response } from "express"
import { ListAgentTasksUseCase } from "./ListAgentTasksUseCase"
class ListAgentTaksController{
  private listAgentTaskUseCase:ListAgentTasksUseCase
  constructor(listAgentTaskUseCase:ListAgentTasksUseCase){
    this.listAgentTaskUseCase = listAgentTaskUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const {id_task} = request.body
    const listAgentTask = await this.listAgentTaskUseCase.execute(id_task)
    return response.status(200).json(listAgentTask)
  }
}
export{ ListAgentTaksController}
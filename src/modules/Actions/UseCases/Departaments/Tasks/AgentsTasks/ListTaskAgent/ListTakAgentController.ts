import { Request, Response } from "express"
import { ListAgentTasksUseCase } from "../ListAgentTasks/ListAgentTasksUseCase"
import { ListTaskAgentsUseCase } from "./ListTaskAgentsUseCase"

class ListTaskAgentsController{
  private listTaskAgentsUseCase:ListTaskAgentsUseCase
  constructor(listTaskAgentsUseCase:ListTaskAgentsUseCase){
    this.listTaskAgentsUseCase = listTaskAgentsUseCase
  }
  async handle(request:Request,response:Response){
    const {id_agent} = request.body
    const listTaskAgent = await this.listTaskAgentsUseCase.execute(id_agent)
    return response.status(200).json(listTaskAgent)
  }
}
export{ListTaskAgentsController}
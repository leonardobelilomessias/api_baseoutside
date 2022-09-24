import { Request, Response } from "express"
import { ListAgentTaskByStateUseCase } from "./ListAgentTaskByStateUseCase"

class ListAgentTaskByStateController{
  private listAgentTaskByState:ListAgentTaskByStateUseCase
  constructor(listAgentTaskByState:ListAgentTaskByStateUseCase){
    this.listAgentTaskByState = listAgentTaskByState
  }
  async handle(request:Request,response:Response){
    const {id_task,state} = request.body
    const listAgentTaskByState = await this.listAgentTaskByState.execute({id_task,state})
    return response.status(200).json(listAgentTaskByState)
  }
}
export{ListAgentTaskByStateController}
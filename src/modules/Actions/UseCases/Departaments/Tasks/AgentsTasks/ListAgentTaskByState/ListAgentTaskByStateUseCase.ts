import { AppError } from "../../../../../../../shared/errors/AppError"
import { IAgentTaskRepository } from "../../../../../repositories/IAgentTaskRepository"

class ListAgentTaskByStateUseCase{
  private agentTaskRepository:IAgentTaskRepository
  constructor(agentTaskRepository:IAgentTaskRepository){
    this.agentTaskRepository = agentTaskRepository 
  }
  async execute({id_task,state}){
    if(!id_task|| !state) throw new AppError("Value of task or state sundefined")
    const listAgentTaskByState = await this.agentTaskRepository.listAgentTaskByState({id_task,state})
    return listAgentTaskByState
  }
}
export{ListAgentTaskByStateUseCase}
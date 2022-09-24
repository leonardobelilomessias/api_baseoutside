import { AppError } from "../../../../../../../shared/errors/AppError"
import { IAgentTaskRepository } from "../../../../../repositories/IAgentTaskRepository"

class ListAgentTasksUseCase{
  private agentTaskRepository:IAgentTaskRepository
  constructor(agentTaskRepository:IAgentTaskRepository){
    this.agentTaskRepository = agentTaskRepository
  }
  async execute(id_task){
    if(!id_task) throw new AppError("Value of task cannot be empty")
    const listagentTask = await this.agentTaskRepository.listAgentTask(id_task)
    return listagentTask
  }
}
export{ListAgentTasksUseCase}
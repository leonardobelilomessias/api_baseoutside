import { AppError } from "../../../../../../../shared/errors/AppError"
import { IAgentTaskRepository } from "../../../../../repositories/IAgentTaskRepository"

class DeleteAgentTaskUseCase{
  private agentTaskRepository:IAgentTaskRepository
  constructor(agentTaskRepository:IAgentTaskRepository){
    this.agentTaskRepository = agentTaskRepository
  }
  async execute({id_agent,id_task}){
    if(!id_agent||!id_task) throw new AppError("Value of agent or task is undefined")
    const deleteAgentTask = await this.agentTaskRepository.deleteAgentTask({id_agent,id_task})
    return deleteAgentTask
  }
}
export{ DeleteAgentTaskUseCase}
import { AppError } from "../../../../../../../shared/errors/AppError"
import { IAgentTaskRepository } from "../../../../../repositories/IAgentTaskRepository"

class UpdateAgentTaskUseCase{
  private agentTaskRepositor:IAgentTaskRepository
  constructor(agentTaskRepositor:IAgentTaskRepository){
    this.agentTaskRepositor = agentTaskRepositor
  }
  async execute({id_agent,id_task,state}){
    if(!id_agent||!id_task) throw new AppError("Value of agent ot task is undefined")
    const updateagentTask = await this.agentTaskRepositor.updateAgentTask({id_agent,id_task,state})
    return updateagentTask
  }
}
export{UpdateAgentTaskUseCase}
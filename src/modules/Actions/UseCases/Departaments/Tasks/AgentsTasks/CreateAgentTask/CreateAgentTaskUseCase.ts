import { AppError } from "../../../../../../../shared/errors/AppError"
import { IAgentTaskRepository } from "../../../../../repositories/IAgentTaskRepository"

class CreateAgentTaskUseCase{
  private agentTaskRepository:IAgentTaskRepository
  constructor(agentTaskRepository:IAgentTaskRepository){
    this.agentTaskRepository = agentTaskRepository
  }
  async execute({id_agent,id_task}){
    if(!id_agent|| !id_task) throw new AppError("Value of agent or tajs cannot be empty")
    const createagentTask = await this.agentTaskRepository.create({id_agent,id_task})
    return createagentTask

  }
}
export{CreateAgentTaskUseCase}
import { AppError } from "../../../../../../../shared/errors/AppError"
import { IAgentTaskRepository } from "../../../../../repositories/IAgentTaskRepository"

class ListTaskAgentsUseCase{
  private agentTaskRepository:IAgentTaskRepository
  constructor(agentTaskRepository:IAgentTaskRepository){
    this.agentTaskRepository = agentTaskRepository
  }
  async execute(id_agent){
    if(!id_agent) throw new AppError("Value agent is undefined")
    const listTaksAgents = await this.agentTaskRepository.listTaskAgent(id_agent)
    return listTaksAgents
  }
}
export{ListTaskAgentsUseCase}
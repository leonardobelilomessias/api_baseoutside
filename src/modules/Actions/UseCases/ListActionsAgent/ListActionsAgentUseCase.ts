import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericAgentActionDTO } from "../../dtos/IAgentActionDTOS"
import { AgentAction } from "../../infra/typeorm/entities/AgentAction"
import { IAgentActionRepository } from "../../repositories/IAgentActionRepository"

class ListActionsAgentUseCase{
  private agentActionRepository:IAgentActionRepository
  constructor(agentActionRepository:IAgentActionRepository){
    this.agentActionRepository = agentActionRepository
  }
  async execute(id_agent:string):Promise<IOutputGenericAgentActionDTO[]>{
    if(!id_agent) throw new AppError("Value of agent or action is undefined.")
    const findActionsAgent = await this.agentActionRepository.listActionsAgent(id_agent)
    return findActionsAgent
  }
}
export{ListActionsAgentUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { AgentAction } from "../../infra/typeorm/entities/AgentAction"
import { IAgentActionRepository } from "../../repositories/IAgentActionRepository"

class CancelAgentActionUseCase{
  private agentActionRepository:IAgentActionRepository
  constructor(agentActionRepository:IAgentActionRepository){
    this.agentActionRepository = agentActionRepository
  }
  async execute({id_action,id_agent}):Promise<AgentAction>{
    if(!id_action||!id_agent) throw new AppError("Value of Action or agent undefined!")
    const cancelAgentAction = await this.agentActionRepository.delete({id_action,id_agent})
    return cancelAgentAction
  }

}
export{CancelAgentActionUseCase}
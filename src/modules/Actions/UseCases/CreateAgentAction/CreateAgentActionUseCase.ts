import { AppError } from "../../../../shared/errors/AppError"
import { AgentAction } from "../../infra/typeorm/entities/AgentAction"
import { IAgentActionRepository } from "../../repositories/IAgentActionRepository"


class CreateAgentActionUseCase{
  private agentActionRepository:IAgentActionRepository
  constructor(agentActionRepository:IAgentActionRepository){
    this.agentActionRepository = agentActionRepository
  }
  async execute({id_agent,id_action}):Promise<AgentAction>{
    if(!id_agent||!id_action) throw new AppError("Value og agent or mission undefined.")
    const foundAgentAction = await this.agentActionRepository.findAgentAction({id_agent,id_action})
    if(foundAgentAction) throw new AppError("Agent alredy is at action")
    const newAgentAction = await this.agentActionRepository.create({id_agent,id_action})
    return newAgentAction
  }
}
export{CreateAgentActionUseCase}
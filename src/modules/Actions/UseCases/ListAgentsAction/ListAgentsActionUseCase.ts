import { AppError } from "../../../../shared/errors/AppError"
import { AgentAction } from "../../infra/typeorm/entities/AgentAction"
import { IAgentActionRepository } from "../../repositories/IAgentActionRepository"

class ListAgentsActionUseCase{
  private agentActionsRepository:IAgentActionRepository
  constructor(agentActionsRepository:IAgentActionRepository){
    this.agentActionsRepository = agentActionsRepository
  }
  async execute(id_action:string):Promise<AgentAction[]>{
    if(!id_action) throw new AppError("Value of mission is undefined")
    const agentsAction = await this.agentActionsRepository.listAgentsAction(id_action)
    return agentsAction
  }
}
export{ListAgentsActionUseCase}
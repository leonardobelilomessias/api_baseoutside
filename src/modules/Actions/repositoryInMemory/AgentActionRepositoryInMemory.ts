import { AgentAction } from "../infra/typeorm/entities/AgentAction"
import { IAgentActionRepository } from "../repositories/IAgentActionRepository"

class AgentActionRepositoryInMemory implements IAgentActionRepository{
  private agentActionRepositoryInMemory:AgentAction[]
  constructor(){
    this.agentActionRepositoryInMemory = []
  }
  async findAgentAction({ id_action, id_agent }): Promise<AgentAction> {
    const agentAction = await this.agentActionRepositoryInMemory.find(agentAction=>((agentAction.id_action=== id_action && agentAction.id_agent === id_agent)))
    return agentAction
  }

  async create({ id_action, id_agent }: { id_action: any; id_agent: any }): Promise<AgentAction> {
    const agentAction = new AgentAction()
    Object.assign(agentAction,{ id_action, id_agent })
    this.agentActionRepositoryInMemory.push(agentAction)
    return agentAction
  }
  listAgentsAction(id_action: any): Promise<AgentAction[]> {
    throw new Error("Method not implemented.")
  }
  listActionsAgent(id_agent: any): Promise<AgentAction> {
    throw new Error("Method not implemented.")
  }
  delete({ id_action, id_agent }: { id_action: any; id_agent: any }): Promise<AgentAction> {
    throw new Error("Method not implemented.")
  }

}
export{AgentActionRepositoryInMemory}

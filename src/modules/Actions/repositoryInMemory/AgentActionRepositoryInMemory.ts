import { AgentAction } from "../infra/typeorm/entities/AgentAction"
import { IAgentActionRepository } from "../repositories/IAgentActionRepository"

class AgentActionRepositoryInMemory implements IAgentActionRepository{
  private agentActionRepositoryInMemory:AgentAction[]
  constructor(){
    this.agentActionRepositoryInMemory = []
  }
  listActionsAgent(id_agent: any): Promise<AgentAction[]> {
    throw new Error("Method not implemented.")
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
  async listAgentsAction(id_action: any): Promise<AgentAction[]> {
    const agentsActions = await this.agentActionRepositoryInMemory.filter(agentAction=>(agentAction.id_action ===id_action))
    return agentsActions
  }

  async delete({ id_action, id_agent }: { id_action: any; id_agent: any }): Promise<AgentAction> {
    const findAgentAction = await this.agentActionRepositoryInMemory.findIndex(agentAction=>(agentAction.id_action ===id_action && agentAction.id_agent ===id_agent))
    const deletedAgentAction = await this.agentActionRepositoryInMemory.slice(findAgentAction,1)
    return deletedAgentAction[0]
  }

}
export{AgentActionRepositoryInMemory}

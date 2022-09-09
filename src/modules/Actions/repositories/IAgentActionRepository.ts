import { AgentAction } from "../infra/typeorm/entities/AgentAction"

interface IAgentActionRepository{

  create({id_action,id_agent}):Promise<AgentAction>

  listAgentsAction(id_action):Promise<AgentAction[]>

  listActionsAgent(id_agent):Promise<AgentAction[]>

  findAgentAction({id_action,id_agent}):Promise<AgentAction>

  delete({id_action,id_agent}):Promise<AgentAction>

}
export{IAgentActionRepository}
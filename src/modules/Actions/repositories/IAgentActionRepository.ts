import { IOutputCreateAgentActionDTO } from "../dtos/IAgentActionDTOS"
import { AgentAction } from "../infra/typeorm/entities/AgentAction"

interface IAgentActionRepository{

  create({id_action,id_agent}):Promise<IOutputCreateAgentActionDTO>

  listAgentsAction(id_action):Promise<IOutputCreateAgentActionDTO[]>

  listActionsAgent(id_agent):Promise<IOutputCreateAgentActionDTO[]>

  findAgentAction({id_action,id_agent}):Promise<IOutputCreateAgentActionDTO>

  delete({id_action,id_agent}):Promise<IOutputCreateAgentActionDTO>

}
export{IAgentActionRepository}
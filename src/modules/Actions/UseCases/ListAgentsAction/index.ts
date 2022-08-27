import { AgentActionRepository } from "../../infra/typeorm/repositories/AgentActionRepository";
import { ListAgentActionController } from "./ListAgentsActionController";
import { ListAgentsActionUseCase } from "./ListAgentsActionUseCase";

const agentActionRepository = new AgentActionRepository()
const listAgentsActionUseCase = new ListAgentsActionUseCase(agentActionRepository)
const listAgentsActionsController = new ListAgentActionController(listAgentsActionUseCase)
export{listAgentsActionsController}
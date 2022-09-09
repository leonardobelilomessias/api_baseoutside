import { AgentActionRepository } from "../../infra/typeorm/repositories/AgentActionRepository";
import { ListActionsAgentController } from "./ListActionsAgentController";
import { ListActionsAgentUseCase } from "./ListActionsAgentUseCase";

const agentActionRepository = new AgentActionRepository()
const listActionsAgentUseCase = new ListActionsAgentUseCase(agentActionRepository)
const listActionsAgentController = new ListActionsAgentController(listActionsAgentUseCase)
export{listActionsAgentController}
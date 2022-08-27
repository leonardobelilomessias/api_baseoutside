import { AgentActionRepository } from "../../infra/typeorm/repositories/AgentActionRepository";
import { CreateAgentActionController } from "./CreateAgentActionController";
import { CreateAgentActionUseCase } from "./CreateAgentActionUseCase";

const agentActionRepository = new AgentActionRepository()
const createAgentActionUseCase = new CreateAgentActionUseCase(agentActionRepository)
const createAgentActionController = new CreateAgentActionController(createAgentActionUseCase)

export{createAgentActionController}
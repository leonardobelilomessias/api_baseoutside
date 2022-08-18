import { AgentsMissionRepository } from "../../infra/typeorm/repositories/AgentsMissionRepository";
import { ListAgentsMissionController } from "./ListAgentsMissionController";
import { ListAgentsMissionUseCase } from "./ListAgentsMissionUseCase";

const agentsMissionsRepository = new AgentsMissionRepository()
const listAgentsMissionUseCase = new ListAgentsMissionUseCase(agentsMissionsRepository)
const listAgentsMissionController = new ListAgentsMissionController(listAgentsMissionUseCase)

export{listAgentsMissionController}
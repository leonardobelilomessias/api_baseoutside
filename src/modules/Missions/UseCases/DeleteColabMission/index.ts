import { AgentsMissionRepository } from "../../infra/typeorm/repositories/AgentsMissionRepository";
import { DeleteAgentMissionController } from "./DeleteAgentMissionController";
import { DeleteAgentMissionUseCase } from "./DeleteAgentMissionUseCase";

const agentsMissionRepository = new AgentsMissionRepository()
const deleteAgentMissionUseCase = new DeleteAgentMissionUseCase(agentsMissionRepository)
const deleteAgentMissionController = new DeleteAgentMissionController(deleteAgentMissionUseCase)

export{ deleteAgentMissionController}
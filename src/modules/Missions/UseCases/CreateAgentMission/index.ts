import { AgentRepository } from "../../../agents/infra/typeorm/repositories/AgentRepository";
import { AgentsMissionRepository } from "../../infra/typeorm/repositories/AgentsMissionRepository";
import { MissionRepository } from "../../infra/typeorm/repositories/MissionReposioty";
import { CreateAgentMissionController } from "./CreateAgentMissionController";
import { CreateAgentMissionUseCase } from "./CreateAgentMissionUseCase";

const agentRepository = new AgentRepository()
const missionRepository = new MissionRepository()
const agentsMissionRepository = new AgentsMissionRepository()
const createAgentMissionUseCase = new CreateAgentMissionUseCase(agentsMissionRepository, missionRepository, agentRepository)
const createAgentMissionController = new CreateAgentMissionController(createAgentMissionUseCase)

export{createAgentMissionController}
import { AgentRepository } from "../../../Agents/infra/typeorm/repositories/AgentRepository";
import { AgentsMissionRepository } from "../../infra/typeorm/repositories/AgentsMissionRepository";
import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { CreateAgentMissionController } from "./CreateAgentMissionController";
import { CreateAgentMissionUseCase } from "./CreateAgentMissionUseCase";

const agentRepository = new AgentRepository()
const missionRepository = new MissionRepository()
const agentsMissionRepository = new AgentsMissionRepository()
const createAgentMissionUseCase = new CreateAgentMissionUseCase(agentsMissionRepository, missionRepository, agentRepository)
const createAgentMissionController = new CreateAgentMissionController(createAgentMissionUseCase)

export{createAgentMissionController}
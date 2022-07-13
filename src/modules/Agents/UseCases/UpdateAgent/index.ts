import { AgentRepository } from "../../Repository/AgentRepository";
import { UpdateAgentController } from "./UpdateAgentConroller";
import { UpdateAgentUseCase } from "./UpdateAgentUseCase";

const agentRepository = new AgentRepository()
const updateAgentUseCase = new UpdateAgentUseCase(agentRepository)
const updateAgentController = new UpdateAgentController(updateAgentUseCase)

export {updateAgentController}
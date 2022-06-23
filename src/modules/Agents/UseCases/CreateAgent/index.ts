import { AgentRepository } from "../../Repository/AgentRepository";
import { CreateAgentController } from "./CreateAgentController";
import { CreateAgentUseCase } from "./CreateAgentUseCase";

export default () => {
  const agentRepository = new AgentRepository()
  const createAgentUseCase = new CreateAgentUseCase(agentRepository)
  const createAgentController = new CreateAgentController(createAgentUseCase)
  return createAgentController
}
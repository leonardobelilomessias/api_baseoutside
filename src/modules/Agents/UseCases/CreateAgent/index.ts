import { AgentRepository } from "../../../Agents/infra/prisma/repositories/AgentRepository"
import { CreateAgentUseCase } from "../../../Agents/UseCases/CreateAgent/CreateAgentUseCase"
import { CreateAgentController } from "../../../Agents/UseCases/CreateAgent/CreateAgentController"

export default () => {
  const agentRepository = new AgentRepository()
  const createAgentUseCase = new CreateAgentUseCase(agentRepository)
  const createAgentController = new CreateAgentController(createAgentUseCase)
  return createAgentController
}
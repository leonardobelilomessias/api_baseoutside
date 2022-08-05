import { AgentRepository } from "../../../agents/infra/typeorm/repositories/AgentRepository"
import { CreateAgentUseCase } from "../../../agents/UseCases/CreateAgent/CreateAgentUseCase"
import { CreateAgentController } from "../../../agents/UseCases/CreateAgent/CreateAgentController"



export default () => {
  const agentRepository = new AgentRepository()
  const createAgentUseCase = new CreateAgentUseCase(agentRepository)
  const createAgentController = new CreateAgentController(createAgentUseCase)
  return createAgentController
}
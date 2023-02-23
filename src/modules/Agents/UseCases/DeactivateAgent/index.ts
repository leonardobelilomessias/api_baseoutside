import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { DeactivateAgentController } from "./DeactivateAgentController";
import { DeactivateAgentUseCase } from "./DeactivateAgentUseCase";

export default () => {

  const agenteRepository = new AgentRepository()
  const deactivateAgentUseCase = new DeactivateAgentUseCase(agenteRepository)
  const deactivateAgentController = new DeactivateAgentController(deactivateAgentUseCase)
  return deactivateAgentController
}


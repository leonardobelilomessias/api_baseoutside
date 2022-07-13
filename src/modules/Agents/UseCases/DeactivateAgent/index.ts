import { AgentRepository } from "../../Repository/AgentRepository";
import { DeactivateAgentController } from "./DeactivateAgentController";
import { DeactivateAgentUseCase } from "./DeactivateAgentUseCase";

const agenteRepository = new AgentRepository()
const deactivateAgentUseCase = new DeactivateAgentUseCase(agenteRepository)
const deactivateAgentController = new DeactivateAgentController(deactivateAgentUseCase)

export{ deactivateAgentController}
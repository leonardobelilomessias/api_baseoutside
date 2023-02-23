import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"
import { SearchAgentsByNameController } from "./SearchAgentsByNameController"
import { SearchAgentsByNameUseCase } from "./SearchAgentsByNameUseCase"

export default () => {
    const agentRepository = new AgentRepository()
    const searchAgentsByNameUseCase = new SearchAgentsByNameUseCase(agentRepository)
    const searchAgentsByNameController = new SearchAgentsByNameController(searchAgentsByNameUseCase)
    return searchAgentsByNameController
}
import { Agent } from "../../Entities/Agent"
import { DTOAgentRepository } from "../../Repository/DTOAgentRepository"

class DeactivateAgentUseCase{
  private agentRepository: DTOAgentRepository
  constructor(agentRepository:DTOAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute({id}):Promise<Agent> {
    const agentWillBeDeactivate = await this.agentRepository.deactivate({ id })
    
    return agentWillBeDeactivate
  }

}
export{DeactivateAgentUseCase}
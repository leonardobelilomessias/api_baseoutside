import { Agent } from "../../Entities/Agent"
import { DTOAgentRepository } from "../../Repository/DTOAgentRepository"

class FindAgentUseCase{
  private agentRepository: DTOAgentRepository
  constructor(agentRepository:DTOAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute({name}):Promise<Agent> {
    const foundAgent = await  this.agentRepository.findByName({ name })
    return foundAgent
  }

}
export{FindAgentUseCase}
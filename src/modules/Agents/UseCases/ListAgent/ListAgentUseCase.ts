import { Agent } from "../../Entities/Agent"
import { AgentRepository } from "../../Repository/AgentRepository"

class ListAgentUseCase{
  private agenteRepository : AgentRepository
  constructor(agentRepository:AgentRepository) {
    this.agenteRepository = agentRepository
  }
  async execute():Promise<Agent[]> {
    const allAgent = await  this.agenteRepository.list()
    return allAgent
  }

}
export {ListAgentUseCase}
import { Agent } from "../../infra/typeorm/entities/Agent"
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"


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
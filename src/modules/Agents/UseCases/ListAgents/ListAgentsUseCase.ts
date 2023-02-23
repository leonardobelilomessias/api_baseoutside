import { Agent } from "../../infra/typeorm/entities/Agent"
import { MapAgent } from "../../infra/typeorm/entities/MapAgent"
import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"

class ListAgentsUseCase {
  private agenteRepository: AgentRepository
  constructor(agentRepository: AgentRepository) {
    this.agenteRepository = agentRepository
  }
  async execute(): Promise<MapAgent[]> {
    const allAgent = await this.agenteRepository.list()
    const MapAgents = allAgent.map(agent => {
      const delingAgent = new MapAgent(agent)
      delingAgent.dealingAgent()
      return delingAgent
    })
    return MapAgents
  }

}
export { ListAgentsUseCase }
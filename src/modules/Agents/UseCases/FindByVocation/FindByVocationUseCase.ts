import { Agent } from "../../Entities/Agent"
import { AgentRepository } from "../../Repository/AgentRepository"


class FindByVocationUseCase{
  private agentRepository: AgentRepository
  constructor(agentRepository:AgentRepository) {
    this.agentRepository = agentRepository
  }

  async execute({vocation}):Promise<Agent[]> {
    const usersByVocation = await this.agentRepository.findByVocation({ vocation })
    return usersByVocation
  }

}
export{FindByVocationUseCase}
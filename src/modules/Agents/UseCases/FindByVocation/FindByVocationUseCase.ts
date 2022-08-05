import { Agent } from "../../infra/typeorm/entities/Agent"
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"



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
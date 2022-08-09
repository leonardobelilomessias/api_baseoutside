import { Agent } from "../../infra/typeorm/entities/Agent"
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"
import { IAgentRepository } from "../../repositories/IAgentRepository"



class FindAgentsByVocationUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }

  async execute({vocation}):Promise<Agent[]> {
    const usersAgentsByVocation = await this.agentRepository.findByVocation({vocation})
    return usersAgentsByVocation
  }

}
export{FindAgentsByVocationUseCase}
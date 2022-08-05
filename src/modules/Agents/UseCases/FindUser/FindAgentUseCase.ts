import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class FindAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute({name}):Promise<Agent> {
    const foundAgent = await  this.agentRepository.findByName({ name })
    return foundAgent
  }

}
export{FindAgentUseCase}
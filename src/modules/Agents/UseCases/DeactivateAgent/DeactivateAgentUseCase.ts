import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class DeactivateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute({id}):Promise<Agent> {
    const agentWillBeDeactivate = await this.agentRepository.deactivate({ id })
    
    return agentWillBeDeactivate
  }

}
export{DeactivateAgentUseCase}
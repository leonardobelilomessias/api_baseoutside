import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class DeactivateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute( id:string ): Promise<Agent> {
    const existAgent = this.agentRepository.findById(id)
    if(existAgent) throw new AppError("agent does not exist")
    const agentWillBeDeactivate = await this.agentRepository.deactivate(id )
    
    return agentWillBeDeactivate
  }

}
export{DeactivateAgentUseCase}
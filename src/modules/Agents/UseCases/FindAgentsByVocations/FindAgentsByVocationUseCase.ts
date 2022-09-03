import { AppConfig } from "aws-sdk"
import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"
import { IAgentRepository } from "../../repositories/IAgentRepository"



class FindAgentsByVocationUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }

  async execute( vocation ): Promise<Agent[]> {
    
    if(!vocation) throw new AppError("Value sent  of field is undefined.")
    const agentByVocation = await this.agentRepository.findByVocation(vocation)

    return agentByVocation
  }

}
export{FindAgentsByVocationUseCase}
import { Agent } from "../../infra/typeorm/entities/Agent"
import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../repositories/IInterestsRepository"

class FindAgentsByInterestUseCase{
  private interestRepositoryInMemory: IInterestsRepository
  private agenteRepository : IAgentRepository
  constructor(interestRepository:IInterestsRepository,agentRepository:IAgentRepository) {
    this.interestRepositoryInMemory = interestRepository
    this.agenteRepository = agentRepository
  }
  async execute(interests:string[]):Promise<Agent[]> {
    const IdAgentByInterests= await this.interestRepositoryInMemory.findByInterestByName(interests)
    const agentsWithInterests = await this.agenteRepository.findByInterest(IdAgentByInterests)
    return agentsWithInterests
  }

}
export{FindAgentsByInterestUseCase}
import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../repositories/IInterestsRepository"

class FindByInterestUseCase{
  private interestRepositoryInMemory: IInterestsRepository
  private agenteRepository : IAgentRepository
  constructor(interestRepository:IInterestsRepository,agentRepository:IAgentRepository) {
    this.interestRepositoryInMemory = interestRepository
    this.agenteRepository = agentRepository
  }
  async execute(interests:[]) {
    const IdAgentByInterests= await this.interestRepositoryInMemory.findByInterestByName(interests)
    const agentsWithInterests = await this.agenteRepository.findByInterestByName(IdAgentByInterests)
    return agentsWithInterests
  }

}
export{FindByInterestUseCase}
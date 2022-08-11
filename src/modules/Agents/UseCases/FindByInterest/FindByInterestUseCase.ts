import { Agent } from "../../infra/typeorm/entities/Agent"
import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../repositories/IInterestsRepository"

class FindAgentsByInterestUseCase{
  private interestRepository: IInterestsRepository

  constructor(interestRepository:IInterestsRepository) {
    this.interestRepository = interestRepository

  }
  async execute(interests: string[]) {
    const IdAgentByInterests= await this.interestRepository.findAgentByInterest(interests)
    return IdAgentByInterests
  }

}
export{FindAgentsByInterestUseCase}
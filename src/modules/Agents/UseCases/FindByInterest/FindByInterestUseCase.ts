import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../repositories/IInterestsRepository"

class FindAgentsByInterestUseCase{
  private interestRepository: IInterestsRepository

  constructor(interestRepository:IInterestsRepository) {
    this.interestRepository = interestRepository

  }
  async execute(interests: string) {
    if(!interests) throw new AppError("Value sent of interest is undefined.")
    const agentsByInterests= await this.interestRepository.findAgentByInterest(interests)
    const filterActivesAgents = await agentsByInterests.filter(agent=>(agent.id_agent.is_active ===true))
    return filterActivesAgents
  }
}
export{FindAgentsByInterestUseCase}
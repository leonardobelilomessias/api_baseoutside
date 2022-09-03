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
  async execute(interests: string[]) {
    if(!interests) throw new AppError("Value sent of interest is undefined.")
    if(typeof interests!==typeof Array()) throw new AppError("Value of interests must be sent as array. ex.: ['interest1', interest2]")
    
    const IdAgentByInterests= await this.interestRepository.findAgentByInterest(interests)
    return IdAgentByInterests
  }

}
export{FindAgentsByInterestUseCase}
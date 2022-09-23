import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericAgentDTO } from "../../DTOS/IAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { InterestsRepository } from "../../infra/typeorm/repositories/InterestsRepository"
import { MapResponseAgent } from "../../MapFields/MapResponseAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../repositories/IInterestsRepository"

class FindAgentsByInterestUseCase{
  private interestRepository: IInterestsRepository

  constructor(interestRepository:IInterestsRepository) {
    this.interestRepository = interestRepository

  }
  async execute(interests: string):Promise<IOutputGenericAgentDTO> {
    if(!interests) throw new AppError("Value sent of interest is undefined.")
    const agentsByInterests= await this.interestRepository.findAgentByInterest(interests)
    //filter actives agents and delete password on return 
    const filterActivesAgents = await agentsByInterests.filter(agent=>{
      if(agent.id_agent.is_active ===true) {
        delete agent.id_agent.password
        return agent
      }
    })
    
    return filterActivesAgents
  }
}
export{FindAgentsByInterestUseCase}
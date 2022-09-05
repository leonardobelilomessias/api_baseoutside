import { AppError } from "../../../../shared/errors/AppError"
import { JourneyAgent } from "../../infra/typeorm/entities/JourneyAgent"
import { IJourneyAgentRepository } from "../../repositories/IJourneyRepository"

class DeleteJourneyAgentUseCase{
  private journeyAgentsRepository:IJourneyAgentRepository
  constructor(journeyAgentsRepository:IJourneyAgentRepository){
    this.journeyAgentsRepository = journeyAgentsRepository
  }
  async execute(id:string):Promise<JourneyAgent>{ 
    if(!id)throw new AppError("Value sent is undefined")
    const deletedJourneyAgent = await this.journeyAgentsRepository.delete(id)
    return deletedJourneyAgent
  }
}
export{DeleteJourneyAgentUseCase}
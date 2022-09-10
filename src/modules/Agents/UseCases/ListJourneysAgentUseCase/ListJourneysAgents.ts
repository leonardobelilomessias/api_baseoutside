import { AppError } from "../../../../shared/errors/AppError"
import { JourneyAgent } from "../../infra/typeorm/entities/JourneyAgent"
import { IJourneyAgentRepository } from "../../repositories/IJourneyRepository"

class ListJourneysAgentUseCase{
  private journeyAgentRepository:IJourneyAgentRepository
  constructor(journeyAgentRepository:IJourneyAgentRepository){
    this.journeyAgentRepository = journeyAgentRepository
  }
  async execute(id_agent:string):Promise<JourneyAgent[]>{
    if(!id_agent) throw new AppError("Value sent is undefined")
    const journeysAgent =await  this.journeyAgentRepository.listByIdAgent(id_agent)
    return journeysAgent
  }
}
export{ListJourneysAgentUseCase}
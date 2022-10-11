import { AppError } from "../../../../shared/errors/AppError"
import { IOutputFetchProfileAgentDTO } from "../../DTOS/IAgentDTOS"
import { MapAgent } from "../../infra/typeorm/entities/MapAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"

class FetchAgentProfileUseCase{
  private agentRepository:IAgentRepository
  constructor(agentRepository:IAgentRepository){
    this.agentRepository = agentRepository
  }
  async execute(id_agent:string){
    if(!id_agent) throw new AppError("Value of field names is empty.")
    const profileAgent = await this.agentRepository.fetchAgentProfile(id_agent)
    return profileAgent
  }
}
export{FetchAgentProfileUseCase}
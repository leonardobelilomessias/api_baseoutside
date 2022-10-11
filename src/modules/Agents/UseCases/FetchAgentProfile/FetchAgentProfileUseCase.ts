import { IOutputFetchProfileAgentDTO } from "../../DTOS/IAgentDTOS"
import { MapAgent } from "../../infra/typeorm/entities/MapAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"

class FetchAgentProfileUseCase{
  private agentRepository:IAgentRepository
  constructor(agentRepository:IAgentRepository){
    this.agentRepository = agentRepository
  }
  async execute(id_agent:string){
    const profileAgent = await this.agentRepository.fetchAgentProfile(id_agent)
    const mapAgent= new MapAgent(profileAgent)
    mapAgent.dealingAgent()
    return profileAgent
  }
}
export{FetchAgentProfileUseCase}
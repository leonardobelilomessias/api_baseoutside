import { IOutputGenericSponsorAgentDTO } from "../../DTOS/ISponsorsAgentDTOS"
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"

class ListSponsorsAgentsUseCase{
  private sponsorAgentRepository: ISponsorAgentRepository
  constructor(sponsorAgentRepository: ISponsorAgentRepository) {
    this.sponsorAgentRepository = sponsorAgentRepository
  }
  async execute(id_agent: string):Promise<IOutputGenericSponsorAgentDTO[]> {  
    const sponsorsAgent = this.sponsorAgentRepository.listSponsorsAgent(id_agent)
    return sponsorsAgent
  }
}
export{ListSponsorsAgentsUseCase}
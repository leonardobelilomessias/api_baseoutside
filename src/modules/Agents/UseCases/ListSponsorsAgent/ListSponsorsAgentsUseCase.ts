import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"

class ListSponsorsAgentsUseCase{
  private sponsorAgentRepository: ISponsorAgentRepository
  constructor(sponsorAgentRepository: ISponsorAgentRepository) {
    this.sponsorAgentRepository = sponsorAgentRepository
  }
  async execute(id_agent) {
    const sponsorsAgent = this.sponsorAgentRepository.list(id_agent)
    return sponsorsAgent
  }
}
export{ListSponsorsAgentsUseCase}
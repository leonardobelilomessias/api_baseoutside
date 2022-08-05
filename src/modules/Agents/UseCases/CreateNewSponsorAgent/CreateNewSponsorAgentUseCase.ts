import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository.ts"


class CreateNewSponsorAgentUseCase{
  private sponsorsAgentsRepository: SponsorsAgentsRepository
  constructor(sponsorsAgentsRepository:SponsorsAgentsRepository) {
    this.sponsorsAgentsRepository = sponsorsAgentsRepository
  }

  async execute({ id_agent, id_sponsor, type, agent_private, sponsor_private }): Promise<SponsorAgent> {
    const newSponsor = await this.sponsorsAgentsRepository.create({ id_agent, id_sponsor, type, agent_private, sponsor_private })
    return newSponsor
  }

}
export{CreateNewSponsorAgentUseCase}
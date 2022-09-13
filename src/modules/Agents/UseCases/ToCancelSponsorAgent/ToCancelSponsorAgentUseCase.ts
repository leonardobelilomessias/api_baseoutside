import { AppError } from "../../../../shared/errors/AppError"
import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"

class ToCancelSponsorAgentUseCase{
  private sponsorAgentRepository: ISponsorAgentRepository
  constructor(sponsorAgentRepository:ISponsorAgentRepository) {
    this.sponsorAgentRepository = sponsorAgentRepository
  }
  async execute({id_agent_token, id_agent, id_sponsor }): Promise<SponsorAgent> {
    if(!id_agent || !id_sponsor) throw new AppError("invalid parameters")
    if(id_agent !== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const canceledSponsor = await this.sponsorAgentRepository.delete({ id_agent, id_sponsor })
    return canceledSponsor
  }
}
export{ToCancelSponsorAgentUseCase}
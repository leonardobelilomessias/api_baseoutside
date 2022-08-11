import { AppError } from "../../../../shared/errors/AppError"
import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"

class ToCancelSponsorAgentUseCase{
  private sponsorAgentRepository: ISponsorAgentRepository
  constructor(sponsorAgentRepository:ISponsorAgentRepository) {
    this.sponsorAgentRepository = sponsorAgentRepository
  }
  async execute({ id_agent, id_sponsor }): Promise<SponsorAgent> {
    if(!id_agent || !id_sponsor) throw new AppError("invalid parameters")
    const canceledSponsor = this.sponsorAgentRepository.delete({ id_agent, id_sponsor })
    return canceledSponsor
  }
}
export{ToCancelSponsorAgentUseCase}
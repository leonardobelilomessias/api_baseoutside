import { AppError } from "../../../../shared/errors/AppError"
import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"

class ListAgentsSponsorUseCase{
  private sponsorAgentsRepository:ISponsorAgentRepository
  constructor(sponsorAgentsRepository:ISponsorAgentRepository){
    this.sponsorAgentsRepository = sponsorAgentsRepository
  }
  async execute(id_sponsor:string):Promise<SponsorAgent[]>{
    if(!id_sponsor) throw new AppError("Value os sponsor is undefined.")
    const listAgentsSponsor = await this.sponsorAgentsRepository.listAgentsSponsor(id_sponsor)
    return listAgentsSponsor
  }
}
export{ListAgentsSponsorUseCase}
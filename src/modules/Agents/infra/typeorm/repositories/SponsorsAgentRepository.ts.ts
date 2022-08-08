import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ISponsorAgentRepository } from "../../../repositories/ISponsorAgentRepository"
import { SponsorAgent } from "../entities/SponsorAgent"



class SponsorsAgentsRepository implements ISponsorAgentRepository{
  private sponsorsAgentsRepository:Repository<SponsorAgent>
  constructor(){
    this.sponsorsAgentsRepository = AppDataSource.getRepository(SponsorAgent)
  }

  async create({ id_agent, id_sponsor, type, agent_private, sponsor_private }): Promise<SponsorAgent> {
    const sponsor = new SponsorAgent()
    const newSponsor = this.sponsorsAgentsRepository.create( {id_agent, id_sponsor, type, agent_private, sponsor_private} )
    await this.sponsorsAgentsRepository.save(newSponsor) 
    return newSponsor
  }
  list(id_agent: any): Promise<SponsorAgent[]> {
    throw new Error("Method not implemented.")
  }
  delete({ id_agent, id_sponsor }: { id_agent: any; id_sponsor: any }): Promise<SponsorAgent> {
    throw new Error("Method not implemented.")
  }
}
export{SponsorsAgentsRepository}
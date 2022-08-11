import { SponsorAgent } from "../infra/typeorm/entities/SponsorAgent";
import { ISponsorAgentRepository } from "../repositories/ISponsorAgentRepository";

class SponsorAgentRepositoryInMemory implements ISponsorAgentRepository{
  private sponsorAgentRepositoryInMemory: SponsorAgent[]
  constructor() {
    this.sponsorAgentRepositoryInMemory = []
  }
  async create({ id_agent, id_sponsor, type, agent_private, sponsor_private }):Promise<SponsorAgent> {
    const newSponsor = new SponsorAgent()
    Object.assign(newSponsor, { id_agent, id_sponsor, type, agent_private, sponsor_private })
    this.sponsorAgentRepositoryInMemory.push(newSponsor)
    return newSponsor
  }
  async list(id_agent: any): Promise<SponsorAgent[]> {
    const sponsors = this.sponsorAgentRepositoryInMemory.filter((sponsors) => { sponsors.id_agent === id_agent })
    return sponsors
  }
  async delete({ id_agent, id_sponsor }: { id_agent: any; id_sponsor: any; }): Promise<SponsorAgent> {
    const sponsorIndex = this.sponsorAgentRepositoryInMemory.findIndex((sponsors)=>(sponsors.id_agent ===id_agent &&sponsors.id_sponsor===id_sponsor))
    const deletedSposnor = this.sponsorAgentRepositoryInMemory.splice(sponsorIndex, 1)
    return deletedSposnor[0]
  }

}
export {SponsorAgentRepositoryInMemory}
import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ISponsorAgentRepository } from "../../../repositories/ISponsorAgentRepository"
import { SponsorAgent } from "../entities/SponsorAgent"

class SponsorsAgentsRepository implements ISponsorAgentRepository{
  private sponsorsAgentsRepository:Repository<SponsorAgent>
  constructor(){
    this.sponsorsAgentsRepository = AppDataSource.getRepository(SponsorAgent)
  }
  async findSponsorRecurent({ id_agent, id_sponsor }: { id_agent: any; id_sponsor: any }): Promise<SponsorAgent> {
    const findSponsorRecurent = await this.sponsorsAgentsRepository.findOne({where:{id_agent:id_agent,id_sponsor:id_sponsor,}})

    return findSponsorRecurent
  }
  async listSponsorsAgent(id_agent: string): Promise<SponsorAgent[]> {
    if(!id_agent) throw new AppError("Invalid agent")
    const sponsorsAgent = await this.sponsorsAgentsRepository.findBy({ id_agent: id_agent })
    return sponsorsAgent
  }

  async create({ id_agent, id_sponsor, type, agent_private, sponsor_private }): Promise<SponsorAgent> {
    const sponsor = new SponsorAgent()
    const newSponsor = this.sponsorsAgentsRepository.create( {id_agent, id_sponsor, type, agent_private, sponsor_private} )
    await this.sponsorsAgentsRepository.save(newSponsor) 
    return newSponsor
  }
  async listAgentsSponsor(id_sponsor: string): Promise<SponsorAgent[]> {
    if(!id_sponsor) throw new AppError("Invalid agent")
    const sponsorsAgent = await this.sponsorsAgentsRepository.findBy({ id_sponsor:id_sponsor })
    return sponsorsAgent
  }
  async delete({ id_agent, id_sponsor }: { id_agent: any; id_sponsor: any }): Promise<SponsorAgent> {
    const canceledSponsor = await this.sponsorsAgentsRepository.findOne({
      where: {
        id_agent: id_agent,
        id_sponsor:id_sponsor
      }
    })
    if(!canceledSponsor)throw new AppError("Don't exist sponsor agent ")
    await this.sponsorsAgentsRepository.delete(canceledSponsor.id)
    return canceledSponsor
  }
}
export{SponsorsAgentsRepository}
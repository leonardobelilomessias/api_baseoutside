import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateSponsorDTO, IDeleteSponsorAgentDTO} from "../../../DTOS/ISponsorsAgentDTOS"
import { ISponsorAgentRepository } from "../../../repositories/ISponsorAgentRepository"
import { SponsorAgent } from "../entities/SponsorAgent"

class SponsorsAgentsRepository implements ISponsorAgentRepository{
  private sponsorsAgentsRepository:Repository<SponsorAgent>
  constructor(){
    this.sponsorsAgentsRepository = AppDataSource.getRepository(SponsorAgent)
  }
  async fetchPublicationsSponsors(id_agent: string): Promise<any> {
    const postSponsorAgent  = await this.sponsorsAgentsRepository.query(`select  agent.name,agent.id id_sponsored, image_profile ,publications.description, publications.id , photos.url, publications.id publication_id from agents  agent inner join sponsors_agents sponsors on agent.id = sponsors.id_agent 
    inner join publications_agents publications on publications.id_agent = sponsors.id_agent 
    inner join photos_publications_agents photos on photos.id_publication = publications.id 
    where sponsors.id_sponsor = '${id_agent}';`)

    return postSponsorAgent
  }
  async findSponsorRecurent({ id_agent, id_sponsor }: { id_agent: any; id_sponsor: any }): Promise<SponsorAgent> {
    const findSponsorRecurent = await this.sponsorsAgentsRepository.findOne({where:{id_agent:id_agent,id_sponsor:id_sponsor,}})

    return findSponsorRecurent
  }
  async listSponsorsAgent(id_agent: string): Promise<SponsorAgent[]> {
    if(!id_agent) throw new AppError("Invalid agent")
    const sponsorsAgent = await this.sponsorsAgentsRepository.find({where:{id_agent:id_agent,sponsor_private:false}})
    return sponsorsAgent
  }

  async create({ id_agent, id_sponsor, type, agent_private, sponsor_private,value }:ICreateSponsorDTO): Promise<SponsorAgent> {
    const newSponsor = this.sponsorsAgentsRepository.create( {id_agent, id_sponsor, type, agent_private, sponsor_private,value} )
    await this.sponsorsAgentsRepository.save(newSponsor) 
    return newSponsor
  }
  async listAgentsSponsor(id_sponsor: string): Promise<SponsorAgent[]> {
    if(!id_sponsor) throw new AppError("Invalid agent")
    const sponsorsAgent = await this.sponsorsAgentsRepository.find({
      where:{id_sponsor:id_sponsor,agent_private:false}})
    return sponsorsAgent
  }
  async delete({ id_agent, id_sponsor }: IDeleteSponsorAgentDTO): Promise<SponsorAgent> {
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
import { SponsorAgent } from "../infra/typeorm/entities/SponsorAgent"

interface ISponsorAgentRepository{
  create({ id_agent, id_sponsor, type, agent_private, sponsor_private }): Promise<SponsorAgent> 
  
  listSponsorsAgent(id_agent: string): Promise<SponsorAgent[]>
  
  listAgentsSponsor(id_sponsor: string): Promise<SponsorAgent[]>

  findSponsorRecurent({id_agent,id_sponsor}):Promise<SponsorAgent>
  
  delete({id_agent,id_sponsor}):Promise<SponsorAgent>
}
export{ISponsorAgentRepository}
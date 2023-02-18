import { ICreateSponsorDTO, IDeleteSponsorAgentDTO, IOutputGenericSponsorAgentDTO } from "../DTOS/ISponsorsAgentDTOS"
import { SponsorAgent } from "../infra/typeorm/entities/SponsorAgent"

interface ISponsorAgentRepository{
  create({ id_agent, id_sponsor, type, agent_private, sponsor_private }:ICreateSponsorDTO): Promise<SponsorAgent> 
  
  listSponsorsAgent(id_agent: string): Promise<IOutputGenericSponsorAgentDTO[]>
  
  listAgentsSponsor(id_sponsor: string): Promise<IOutputGenericSponsorAgentDTO[]>

  findSponsorRecurent({id_agent,id_sponsor}):Promise<IOutputGenericSponsorAgentDTO>
  
  delete({id_agent,id_sponsor}:IDeleteSponsorAgentDTO):Promise<IOutputGenericSponsorAgentDTO>
}
export{ISponsorAgentRepository}
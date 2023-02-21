import { AppError } from "../../../../shared/errors/AppError"
import { IInputCreateSponsorDTO, IOutputGenericSponsorAgentDTO } from "../../DTOS/ISponsorsAgentDTOS"
import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"


class CreateNewSponsorAgentUseCase{
  private sponsorsAgentsRepository: ISponsorAgentRepository
  private agentRepository :IAgentRepository
  constructor(sponsorsAgentsRepository:ISponsorAgentRepository,agentRepository:IAgentRepository) {
    this.sponsorsAgentsRepository = sponsorsAgentsRepository
    this.agentRepository = agentRepository
  }

  async execute({ id_agent, id_sponsor, type, agent_private, sponsor_private , value,id_agent_token}:IInputCreateSponsorDTO): Promise<IOutputGenericSponsorAgentDTO> {
    if (!id_agent || !id_sponsor) throw new AppError('invalid sponsor or agent')
    if(!type ||!value) throw new AppError("Value of type or value is undefined")
    if(id_sponsor!== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    if(id_agent ===id_sponsor) throw new AppError("Value of agent and sponsor can't be the same")
    const existAgent = await this.agentRepository.findById(id_agent)
    const existSponsor = await this.agentRepository.findById(id_sponsor)
    if (!existAgent || !existSponsor) throw  new AppError('dont existent agent ')
    if(type!=="unique" && type!=="recurrent") throw new AppError("Type must be current or unique.")
    if(type ==="recurrent"){
      const findSponsorRecurent = await this.sponsorsAgentsRepository.findSponsorRecurent({id_agent,id_sponsor})
      if(findSponsorRecurent) throw new AppError("Already exist sponsor recurrent for this agent")
    }
    const newSponsor = await this.sponsorsAgentsRepository.create({ id_agent, id_sponsor, type, agent_private, sponsor_private,value })
    return newSponsor 
  }
  0100010001011011101

}
export{CreateNewSponsorAgentUseCase}
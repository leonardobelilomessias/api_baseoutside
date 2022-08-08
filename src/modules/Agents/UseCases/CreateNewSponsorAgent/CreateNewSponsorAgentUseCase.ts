import { AppError } from "../../../../shared/errors/AppError"
import { SponsorAgent } from "../../infra/typeorm/entities/SponsorAgent"
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"
import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository.ts"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { ISponsorAgentRepository } from "../../repositories/ISponsorAgentRepository"


class CreateNewSponsorAgentUseCase{
  private sponsorsAgentsRepository: ISponsorAgentRepository
  private agentRepository :IAgentRepository
  constructor(sponsorsAgentsRepository:ISponsorAgentRepository,agentRepository:IAgentRepository) {
    this.sponsorsAgentsRepository = sponsorsAgentsRepository
    this.agentRepository = agentRepository
  }

  async execute({ id_agent, id_sponsor, type, agent_private, sponsor_private }): Promise<SponsorAgent> {
    if (!id_agent || !id_sponsor) throw new AppError('invalid sponsor or agent')
    const existAgent = await this.agentRepository.findById(id_agent)
    const existSponsor = await this.agentRepository.findById(id_sponsor)
    if(!existAgent || !existSponsor) throw new AppError('dont existent agent ')
    const newSponsor = await this.sponsorsAgentsRepository.create({ id_agent, id_sponsor, type, agent_private, sponsor_private })
    return newSponsor
  }

}
export{CreateNewSponsorAgentUseCase}
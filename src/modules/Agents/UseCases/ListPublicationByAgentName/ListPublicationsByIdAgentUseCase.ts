import { IPublicationsAgentRepository } from "../../DTOS/IPublicationsAgentRepository"
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent"

class ListPublicationsByIdAgentUseCase{
  private publicationsAgentsRepository: IPublicationsAgentRepository
  constructor(publicationsAgentsRepository: IPublicationsAgentRepository) {
    this.publicationsAgentsRepository = publicationsAgentsRepository
  }
  async execute(id_agent:string): Promise<PublicationAgent[]>{
    const publicationByAgentName = await this.publicationsAgentsRepository.listByIdAgent(id_agent)
    return publicationByAgentName
  }
}
export{ ListPublicationsByIdAgentUseCase}
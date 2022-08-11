import { IPublicationsAgentRepository } from "../../DTOS/IPublicationsAgentRepository"
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent"

class ListPublicationsByIdAgentUseCase{
  private publicationsAgentsRepository: IPublicationsAgentRepository
  constructor(publicationsAgentsRepository: IPublicationsAgentRepository) {
    this.publicationsAgentsRepository = publicationsAgentsRepository
  }
  async execute(idAgent:string): Promise<PublicationAgent[]>{
    const publicationByAgentName = await this.publicationsAgentsRepository.listByIdAgent(idAgent)
    return publicationByAgentName
  }
}
export{ ListPublicationsByIdAgentUseCase}
import { IPublicationsAgentRepository } from "../../DTOS/IPublicationsAgentRepository"
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent"

class ListAllPublicationsAgentsUseCase{
  private publicationsAgentsRepository: IPublicationsAgentRepository
  constructor(publicationsAgentsRepository: IPublicationsAgentRepository) {
    this.publicationsAgentsRepository = publicationsAgentsRepository
  }
  async execute():Promise<PublicationAgent[]> {
    const allPublicationAgent =await  this.publicationsAgentsRepository.listAll()
    return allPublicationAgent
  }

}
export{ListAllPublicationsAgentsUseCase}
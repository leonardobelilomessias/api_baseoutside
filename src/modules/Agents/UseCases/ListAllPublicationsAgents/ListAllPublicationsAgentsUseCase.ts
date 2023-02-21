import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent"
import { IPublicationsAgentRepository } from "../../repositories/IPublicationsAgentRepository"

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
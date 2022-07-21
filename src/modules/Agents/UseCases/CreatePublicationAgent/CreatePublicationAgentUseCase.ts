import { PublicationAgent } from "../../Entities/PublicationAgent"
import { DTOPhotosPublicationAgent } from "../../Repository/DTOS/DTOPhotosPublicationAgentRepository"
import { CreatePublication, DTOPublicationsAgentRepository, ResponseCreatePublication } from "../../Repository/DTOS/DTOPublicationsAgentRepository"

class CreatePublicationAgentUseCase{
  private publicationAgentRepository: DTOPublicationsAgentRepository
  constructor(
    publicationAgentRepository: DTOPublicationsAgentRepository,
  ){
    this.publicationAgentRepository = publicationAgentRepository
  }

  async execute({ id_agent, type, description ,content}: CreatePublication): Promise<ResponseCreatePublication> {
    const newPublication = this.publicationAgentRepository.create({id_agent,type,description,content})
    return newPublication
  }

}
export{CreatePublicationAgentUseCase}
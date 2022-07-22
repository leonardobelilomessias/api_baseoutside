import { PublicationAgent } from "../../Entities/PublicationAgent"
import { DTOPhotosPublicationAgent } from "../../Repository/DTOS/DTOPhotosPublicationAgentRepository"
import {DTOPublicationsAgentRepository, ICreatePublication, ResponseCreatePublication } from "../../Repository/DTOS/DTOPublicationsAgentRepository"

class CreatePublicationAgentUseCase{
  private publicationAgentRepository: DTOPublicationsAgentRepository
  constructor(
    publicationAgentRepository: DTOPublicationsAgentRepository,
  ){
    this.publicationAgentRepository = publicationAgentRepository
  }

  async execute({ agent, type, description ,content}: ICreatePublication): Promise<ResponseCreatePublication> {
    const newPublication = await this.publicationAgentRepository.create({agent,type,description,content})
    return newPublication
  }

}
export{CreatePublicationAgentUseCase}
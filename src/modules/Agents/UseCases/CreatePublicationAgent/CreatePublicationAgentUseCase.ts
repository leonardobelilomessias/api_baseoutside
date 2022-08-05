import { DTOPublicationsAgentRepository, ICreatePublication, ResponseCreatePublication } from "../../DTOS/DTOPublicationsAgentRepository"

class CreatePublicationAgentUseCase{
  private publicationAgentRepository: DTOPublicationsAgentRepository
  constructor(
    publicationAgentRepository: DTOPublicationsAgentRepository,
  ){
    this.publicationAgentRepository = publicationAgentRepository
  }

  async execute({ id_agent, type, description ,content}: ICreatePublication): Promise<ResponseCreatePublication> {
    const newPublication = await this.publicationAgentRepository.create({id_agent,type,description,content})
    return newPublication
  }

}
export{CreatePublicationAgentUseCase}
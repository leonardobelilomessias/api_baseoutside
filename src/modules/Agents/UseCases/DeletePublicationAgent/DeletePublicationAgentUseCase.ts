import { AppError } from "../../../../shared/errors/AppError"
import { IPublicationsAgentRepository } from "../../DTOS/IPublicationsAgentRepository"
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent"


class DeletePublicationAgentUseCase{
  private publicationAgentRepository:IPublicationsAgentRepository
  constructor(publicationAgentRepository:IPublicationsAgentRepository){
    this.publicationAgentRepository = publicationAgentRepository
  }
  async execute({id_agent_token,id_publication}):Promise<PublicationAgent>{
    if(!id_publication) throw new AppError("Value sent of publication is undefined.")
    const findPublication = await this.publicationAgentRepository.findPublicationById(id_publication)
    if(!findPublication) throw new AppError("Publication not found.")
    if(findPublication.id_agent !== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const deletePublication = await this.publicationAgentRepository.delete(id_publication)
    return deletePublication
  }
}
export{DeletePublicationAgentUseCase}
import { AppError } from "../../../../shared/errors/AppError";
import { IInputUpdatePublicationDTO } from "../../DTOS/IPublicationAgentDTOS";
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent";
import { IPublicationsAgentRepository } from "../../repositories/IPublicationsAgentRepository";

class UpdatePublicationAgentUseCase{
  private publicationsAgentRepository: IPublicationsAgentRepository
  constructor(publicationsAgentRepository: IPublicationsAgentRepository) {
    this.publicationsAgentRepository = publicationsAgentRepository
  }
  async execute({id_agent_token,id_publication, description}:IInputUpdatePublicationDTO): Promise<PublicationAgent> {
    if(!id_publication) throw new AppError("Value sent of publications is undefined")
    const existPubiclation = await this.publicationsAgentRepository.findPublicationById(id_publication)
    if(!existPubiclation) throw new AppError("publication does not exist")
    if(existPubiclation.id_agent !== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const updatePublication = await this.publicationsAgentRepository.edit({ id_publication:existPubiclation.id, description })

    return updatePublication
  }
}
export{ UpdatePublicationAgentUseCase}
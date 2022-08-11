import { AppError } from "../../../../shared/errors/AppError";
import { IPublicationsAgentRepository } from "../../DTOS/IPublicationsAgentRepository";
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent";

class UpdatePublicationAgentUseCase{
  private publicationsAgentRepository: IPublicationsAgentRepository
  constructor(publicationsAgentRepository: IPublicationsAgentRepository) {
    this.publicationsAgentRepository = publicationsAgentRepository
  }
  async execute(id_publication: string, description: string): Promise<PublicationAgent> {
    const existPubiclation = await this.publicationsAgentRepository.findPublicationById(id_publication)
    if(!existPubiclation) throw new AppError("publication does not exist")
    const updatePublication = await this.publicationsAgentRepository.edit({ id_publication:existPubiclation.id, description })

    return updatePublication
  }
}
export{ UpdatePublicationAgentUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { ICreatePublication, IPublicationsAgentRepository, ResponseCreatePublication } from "../../DTOS/IPublicationsAgentRepository"

class CreatePublicationAgentUseCase{
  private publicationAgentRepository: IPublicationsAgentRepository
  constructor(publicationAgentRepository: IPublicationsAgentRepository,){
    this.publicationAgentRepository = publicationAgentRepository
  }
  async execute({ id_agent, type, description ,content}: ICreatePublication): Promise<ResponseCreatePublication> {
    if(!id_agent||!type||!description) throw new AppError("You sent some undefined field.")
    const newPublication = await this.publicationAgentRepository.create({ id_agent, type, description, content })
    return newPublication
  }

}
export{CreatePublicationAgentUseCase}
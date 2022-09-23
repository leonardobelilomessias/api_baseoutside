import { AppError } from "../../../../shared/errors/AppError"
import { IOutputListPublicationDTO } from "../../DTOS/IPublicationAgentDTOS"
import { IPublicationsAgentRepository } from "../../repositories/IPublicationsAgentRepository"

class ListPublicationAgentUseCase{
  private publicationAgentRepository:IPublicationsAgentRepository
  constructor(publicationAgentRepository:IPublicationsAgentRepository){
    this.publicationAgentRepository = publicationAgentRepository
  }
  async execute(id_agent:string):Promise<IOutputListPublicationDTO[]>{
    if(!id_agent) throw new AppError("Value sent of agent is undefined.")
    const listPublication = await this.publicationAgentRepository.listByIdAgent(id_agent)
    return listPublication
  }
}
export{ListPublicationAgentUseCase}
import { AppError } from "../../../../shared/errors/AppError";
import { IPublicationsAgentRepository } from "../../repositories/IPublicationsAgentRepository";

class FetchPublicationAgentByIdUseCase{
    private publicationAgentRepository:IPublicationsAgentRepository
    constructor(publicationAgentRepository:IPublicationsAgentRepository){
        this.publicationAgentRepository = publicationAgentRepository
    }
    async execute(publication_id){
        if(!publication_id){
            throw new AppError("Value of field names is empty.")
        }
        const publication = await this.publicationAgentRepository.fetchAgentPublicationById(publication_id)
        console.log(publication_id)
        return publication
    }
}
export{FetchPublicationAgentByIdUseCase}
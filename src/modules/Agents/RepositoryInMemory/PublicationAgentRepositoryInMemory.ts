import { DTOPhotosPublicationAgent } from "../DTOS/DTOPhotosPublicationAgentRepository"
import { DTOPublicationsAgentRepository, ResponseCreatePublication, EditPublication, ICreatePublication } from "../DTOS/DTOPublicationsAgentRepository"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"

class PublicationsAgentRepositoryInMemory implements DTOPublicationsAgentRepository {
  publicationsAgent: PublicationAgent[] =[]
  photosPublicationAgent:DTOPhotosPublicationAgent
  constructor(photosPublicationAgent:DTOPhotosPublicationAgent) {
    this.photosPublicationAgent = photosPublicationAgent
  }
  
  async create({ id_agent, type, description,content }: ICreatePublication): Promise<ResponseCreatePublication> {
    
    const newPublicationAgent = new PublicationAgent()
    Object.assign(newPublicationAgent, { id_agent, type, description })
    const newPhotoPublication = await this.photosPublicationAgent.create(newPublicationAgent.id,content)
    this.publicationsAgent.push(newPublicationAgent)
    
    return {
      id_publication: newPublicationAgent.id,
      type: type,
      content: newPhotoPublication
    }
  }
  async list(): Promise<PublicationAgent[]> {
    const allPublicationAgent = this.publicationsAgent
    return allPublicationAgent
  }
  async edit({ id_publication, type, description }: EditPublication): Promise<PublicationAgent> {
    const editAgent = this.publicationsAgent.find((publication) => {
      if (publication.id === id_publication) {
         publication.description = description
       }
    })
     return editAgent
  }
  async delete(id_publication: string): Promise<PublicationAgent> {
    const findPublication = this.publicationsAgent.find(publication=> { return publication.id === id_publication})
    const deleteAgent = this.publicationsAgent.findIndex((publication) => {
      return id_publication === publication.id
    })
    this.publicationsAgent.splice(deleteAgent, 1)
    return findPublication
  }

}
export{PublicationsAgentRepositoryInMemory}
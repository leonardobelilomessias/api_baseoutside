import { AppError } from "../../../shared/errors/AppError"
import { IPhotosPublicationAgent } from "../DTOS/IPhotosPublicationAgentRepository"
import { IPublicationsAgentRepository, ICreatePublication, ResponseCreatePublication, EditPublication } from "../DTOS/IPublicationsAgentRepository"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"


class PublicationsAgentRepositoryInMemory implements IPublicationsAgentRepository {
  publicationsAgent: PublicationAgent[] = []
  photosPublicationAgent:IPhotosPublicationAgent
  constructor(photosPublicationAgent:IPhotosPublicationAgent) {
    this.photosPublicationAgent = photosPublicationAgent
  }
  async listByAgentName(idAgent: string): Promise<PublicationAgent[]> {
    const publicationByIdAgent =await  this.publicationsAgent.filter(publicationagent => publicationagent.id_agent === idAgent)
    return publicationByIdAgent
  }
  async listAll(): Promise<PublicationAgent[]> {
    const allPublications = await  this.publicationsAgent
    return allPublications
  }
  async listByIdAgent(idAgent: string): Promise<PublicationAgent[]> {
    const publicationByIdAgent =await  this.publicationsAgent.filter(publicationagent => publicationagent.id_agent === idAgent)
    return publicationByIdAgent
  }
  async findPublicationById(id_publication: string): Promise<PublicationAgent> {

    const foundPublication = this.publicationsAgent.find(publication => publication.id === id_publication)

    return foundPublication
  }
  
  async create({ id_agent, type, description,content }: ICreatePublication): Promise<ResponseCreatePublication> {
    const newPublicationAgent = new PublicationAgent()
    Object.assign(newPublicationAgent, { id_agent, type, description })
    const newPhotoPublication = await this.photosPublicationAgent.create(newPublicationAgent.id, content)
    if (String(newPhotoPublication[0].id_publication) === newPublicationAgent.id) {
      this.publicationsAgent.push(newPublicationAgent)
      return {
        id_agent:id_agent,
        id_publication: newPublicationAgent.id,
        type: type,
        content: newPhotoPublication
      }
    } else {
      throw new AppError('Dont to able create a publication')
    }
    
  }
  async list(): Promise<PublicationAgent[]> {
    const allPublicationAgent = this.publicationsAgent
    return allPublicationAgent
  }
  async edit({ id_publication, description }: EditPublication): Promise<PublicationAgent> {
    const editAgent = await this.publicationsAgent.find((publication) => {
      return publication.id === id_publication
    })
    Object.assign(editAgent,{description:description})
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
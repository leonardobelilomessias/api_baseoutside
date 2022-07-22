import { Repository } from "typeorm";
import { AppDataSource } from "../../../database";
import { PublicationAgent } from "../Entities/PublicationAgent";
import { IFile } from "./DTOS/DTOPhotosPublicationAgentRepository";
import { ICreatePublication, DTOPublicationsAgentRepository, EditPublication, ResponseCreatePublication } from "./DTOS/DTOPublicationsAgentRepository";
import { PhotoPublicationAgentRepository } from "./PhotosPublicationAgentRepository";

class PublicationsAgentRepository implements DTOPublicationsAgentRepository{
  private publicationsAgentRepository: Repository<PublicationAgent>
  private photosPublicationsAgent : PhotoPublicationAgentRepository
  constructor(photoPublicationAgentRepository:PhotoPublicationAgentRepository) {
    this.publicationsAgentRepository = AppDataSource.getRepository(PublicationAgent)
    this.photosPublicationsAgent = photoPublicationAgentRepository
  }
  async create({agent, type, description ,content}:ICreatePublication): Promise<ResponseCreatePublication> {
    const newPublication = new PublicationAgent()
    Object.assign(newPublication, { agent, type, description })
    await this.publicationsAgentRepository.save(newPublication)
    const photosAgent = await this.photosPublicationsAgent.create(newPublication.id,content)
    return {id_publication:newPublication.id,type:newPublication.type,content:photosAgent}
  }
  list(): Promise<PublicationAgent[]> {
    throw new Error("Method not implemented.");
  }
  edit({ id_publication, type, description }: EditPublication): Promise<PublicationAgent> {
    throw new Error("Method not implemented.");
  }
  delete(id_publication: string): Promise<PublicationAgent> {
    throw new Error("Method not implemented.");
  }

}
export{PublicationsAgentRepository}
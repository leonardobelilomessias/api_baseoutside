import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";

import { EditPublication, ICreatePublication, IPublicationsAgentRepository, ResponseCreatePublication } from "../../../DTOS/IPublicationsAgentRepository";
import { PublicationAgent} from "../entities/PublicationAgent";
import { PhotoPublicationAgentRepository } from "./PhotosPublicationAgentRepository";

class PublicationsAgentRepository implements IPublicationsAgentRepository{
  private publicationsAgentRepository: Repository<PublicationAgent>
  private photosPublicationsAgent : PhotoPublicationAgentRepository
  constructor(photoPublicationAgentRepository:PhotoPublicationAgentRepository) {
    this.publicationsAgentRepository = AppDataSource.getRepository("publications_agents")
    this.photosPublicationsAgent = photoPublicationAgentRepository
  }
  listByAgentName(nameAgent: string): Promise<PublicationAgent[]> {
    throw new Error("Method not implemented.");
  }
  async listAll(): Promise<PublicationAgent[]> {
    const allPublicationAgent = await this.publicationsAgentRepository.find()
    return allPublicationAgent
  }
  async listByIdAgent(idAgent: string): Promise<PublicationAgent[]> {
    const publicationByIdAgent = await this.publicationsAgentRepository.find({
      where:{id_agent:idAgent}
    })
    
    return publicationByIdAgent
  }
  async findPublicationById(id_publication: string): Promise<PublicationAgent> {
    const foundPublication = await this.publicationsAgentRepository.findOneBy({id:id_publication})
    return foundPublication
  }
  async create({id_agent, type, description ,content}:ICreatePublication): Promise<ResponseCreatePublication> {

    const newPublication = new PublicationAgent()
    Object.assign(newPublication,{id_agent,type,description})
    await this.publicationsAgentRepository.save(newPublication)
    const photosAgent = await this.photosPublicationsAgent.create(newPublication.id,content)
    return  {id_agent:id_agent,id_publication:newPublication.id,type:newPublication.type,description:description,content:photosAgent} 
  }
  list(): Promise<PublicationAgent[]> {
    return this.publicationsAgentRepository.find()
  }
  async edit({ id_publication, description }: EditPublication): Promise<PublicationAgent> {
    const updatePublication = await this.publicationsAgentRepository.save({ id: id_publication, description: description })
    return updatePublication
  }
  delete(id_publication: string): Promise<PublicationAgent> {
    throw new Error("Method not implemented.");
  }

}
export{PublicationsAgentRepository}
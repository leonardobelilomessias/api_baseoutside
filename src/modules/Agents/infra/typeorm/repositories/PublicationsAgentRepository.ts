import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { EditPublication, fullPublication, ICreatePublication, IPublicationsAgentRepository, ResponseCreatePublication } from "../../../DTOS/IPublicationsAgentRepository";
import { IJourneyAgentRepository } from "../../../repositories/IJourneyRepository";
import { Agent } from "../entities/Agent";
import { PublicationAgent} from "../entities/PublicationAgent";
import { AgentRepository } from "./AgentRepository";
import { JourneyAgentRepository } from "./JourneyAgentRepository";
import { PhotoPublicationAgentRepository } from "./PhotosPublicationAgentRepository";

class PublicationsAgentRepository implements IPublicationsAgentRepository{
  private publicationsAgentRepository: Repository<PublicationAgent>
  private photosPublicationsAgent : PhotoPublicationAgentRepository
  private agentRepository:Repository<Agent>
  private journeyAgentRepository:IJourneyAgentRepository
  constructor(photoPublicationAgentRepository:PhotoPublicationAgentRepository) {
    this.publicationsAgentRepository = AppDataSource.getRepository("publications_agents")
    this.agentRepository = AppDataSource.getRepository("agents")
    this.photosPublicationsAgent = photoPublicationAgentRepository
    this.journeyAgentRepository = new JourneyAgentRepository()
  }
  listByAgentName(nameAgent: string): Promise<PublicationAgent[]> {
    throw new Error("Method not implemented.");
  }
  async listAll(): Promise<PublicationAgent[]> {
    const allPublicationAgent = await this.publicationsAgentRepository.find()
    return allPublicationAgent
  }
  async listByIdAgent(id_agent: string){

    const publicationByIdAgent = await this.publicationsAgentRepository.find({
      where:{id_agent:id_agent}
    })

    const fullPublications = await publicationByIdAgent.map(async (publication)=>{
      const photo = await this.photosPublicationsAgent.findPhotosByIdPublication(publication.id)
      const urlPhotos = photo.map(onePhoto=>(onePhoto.url))
      return {publication:publication,  photos:urlPhotos}
    })
    return Promise.all(fullPublications)
  }
  async findPublicationById(id_publication: string): Promise<PublicationAgent> {
    const foundPublication = await this.publicationsAgentRepository.findOneBy({id:id_publication})
    return foundPublication
  }
  async create({id_agent, type, description ,content}:ICreatePublication): Promise<ResponseCreatePublication> {
    const agent = await this.agentRepository.findOne({where:{id:id_agent}})
    if(!agent) throw new AppError("Agent not found.")
    const newPublication = new PublicationAgent()
    Object.assign(newPublication,{id_agent,type,description})
    await this.publicationsAgentRepository.save(newPublication)
    const photosAgent = await this.photosPublicationsAgent.create(newPublication.id,content)
    this.journeyAgentRepository.create({id_agent:id_agent,type:"create publication",id_content:newPublication.id})
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
import { Repository } from "typeorm"
import { AppDataSource } from "../../../database"
import { PhotoPublicationAgent } from "../Entities/PhotoPublicationAgent"
import { DTOPhotosPublicationAgent, IFile } from "./DTOS/DTOPhotosPublicationAgentRepository"




class PhotoPublicationAgentRepository implements DTOPhotosPublicationAgent{
  private photosPublicationAgent: Repository<PhotoPublicationAgent>
  constructor() {
    this.photosPublicationAgent = AppDataSource.getRepository(PhotoPublicationAgent)
  }
  async create(id_publication: string, photos: string[]): Promise<PhotoPublicationAgent[]> {
    
    const promise =  photos.map(async (photo) => {
      const newPhoto = new PhotoPublicationAgent()
      Object.assign(newPhoto, { id_publication: id_publication, url: photo })
      const fotonew =await this.photosPublicationAgent.save(newPhoto)
      return fotonew
    })
    const photosAgent =await  Promise.all(promise)
    
    return photosAgent
  }
  async list(id_publication: string): Promise<PhotoPublicationAgent[]> {
    throw new Error("Method not implemented.")
  }
  delete(id_publication: string): Promise<void> {
    throw new Error("Method not implemented.")
  }

}
export{PhotoPublicationAgentRepository}
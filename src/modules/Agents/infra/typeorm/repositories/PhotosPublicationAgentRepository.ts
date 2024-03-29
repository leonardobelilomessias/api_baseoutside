import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IStorageProvider } from "../../../../../utils/providers/StorageProvider/IStorageProvide"
import { IPhotoPublicationAgentDTO } from "../../../DTOS/IPhotoPublicationsDTOS"
import { IPhotosPublicationAgent } from "../../../repositories/IPhotosPublicationAgentRepository"
import { PhotoPublicationAgent } from "../entities/PhotoPublicationAgent"

class PhotoPublicationAgentRepository implements IPhotosPublicationAgent{
  private photosPublicationAgent: Repository<PhotoPublicationAgent>
  private storageProvider:IStorageProvider
  constructor(storageProvider:IStorageProvider) {
    this.photosPublicationAgent = AppDataSource.getRepository('photos_publications_agents')
    this.storageProvider = storageProvider

  }
  async findPhotosByIdPublication(id_publication: string): Promise<IPhotoPublicationAgentDTO[]> {
    const photosPublications = await this.photosPublicationAgent.find({where:{id_publication:id_publication}})
    return photosPublications
  }
  async create(id_publication: string, photos: string[]): Promise<IPhotoPublicationAgentDTO[]> {
    
    const promise =  photos.map(async (photo) => {
      const newPhoto = new PhotoPublicationAgent(id_publication)
      Object.assign(newPhoto, {  url: photo })
      const fotonew = await this.photosPublicationAgent.save(newPhoto)
      this.storageProvider.save(photo,"PhotosPublications") 
      return fotonew  
    })
    const photosAgent =await  Promise.all(promise)

    return photosAgent
  }
  async list(id_publication: string): Promise<IPhotoPublicationAgentDTO[]> {
    throw new Error("Method not implemented.")
  }
  async delete(id_publication: string): Promise<void> {
    try{
      const findPhotos = await this.photosPublicationAgent.find({where:{id_publication}})
      const deletePhotos = await this.photosPublicationAgent.createQueryBuilder()
      .delete()
      .from('photos_publications_agents')
      .where("id_publication = :id_publication", { id_publication:id_publication})
      .execute()
      findPhotos.forEach(async photo=>{
        await this.storageProvider.delete(photo.url,"PhotosPublications")
      })
    }catch(err){
      throw new AppError(`There was some error = ${err}`)
    }


  }

}
export{PhotoPublicationAgentRepository}
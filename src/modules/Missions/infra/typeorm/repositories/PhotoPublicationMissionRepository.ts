import { url } from "inspector";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IStorageProvider } from "../../../../../utils/providers/StorageProvider/IStorageProvide";
import { ICreatePhotoMision, IPhotoPublicationMissionRepository } from "../../../repositories/IPhotoPublicationMissionRepository";
import { PhotoPublicationMission } from "../entities/PhotoPublicationMission";
class PhotoPublicationMissionRepository implements IPhotoPublicationMissionRepository{
  private photopublicationRepository:Repository<PhotoPublicationMission>
  private storageProvider:IStorageProvider
  constructor( storageProvider:IStorageProvider){
    this.photopublicationRepository = AppDataSource.getRepository(PhotoPublicationMission)
    this.storageProvider = storageProvider
  }
  async create( {id_publication,content}:{id_publication:string,content:string[]}): Promise<PhotoPublicationMission[]> {
    const urlPhotos = content.map(async photo=>{
      const newPhoto = new PhotoPublicationMission()
      Object.assign(newPhoto,{id_publication,url:photo})
      const createdPhoto = await this.photopublicationRepository.save(newPhoto)
      this.storageProvider.save(photo,"PhotosPublicationsMissions") 
      return newPhoto
    })
  
    

    return Promise.all(urlPhotos)
  }
  async list(id_publication: string): Promise<PhotoPublicationMission[]> {
    const photos = await this.photopublicationRepository.find({where:{id_publication}})
    console.log(photos)
    return photos
  }
  delete(id_publication: string): Promise<PhotoPublicationMission> {
    throw new Error("Method not implemented.");
  }

}
export{PhotoPublicationMissionRepository}
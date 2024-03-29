import { url } from "inspector";
import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IStorageProvider } from "../../../../../utils/providers/StorageProvider/IStorageProvide";
import { IOutputPhotoPublicationMission } from "../../../dtos/IPhotoPublicationMissionDTOS";
import { ICreatePhotoMision, IPhotoPublicationMissionRepository } from "../../../repositories/IPhotoPublicationMissionRepository";
import { PhotoPublicationMission } from "../entities/PhotoPublicationMission";
class PhotoPublicationMissionRepository implements IPhotoPublicationMissionRepository{
  private photopublicationRepository:Repository<PhotoPublicationMission>
  private storageProvider:IStorageProvider
  constructor( storageProvider:IStorageProvider){
    this.photopublicationRepository = AppDataSource.getRepository(PhotoPublicationMission)
    this.storageProvider = storageProvider
  }
  async create( {id_publication,content}:{id_publication:string,content:string[]}): Promise<IOutputPhotoPublicationMission[]> {
    const urlPhotos = content.map(async photo=>{
      const newPhoto = new PhotoPublicationMission()
      Object.assign(newPhoto,{id_publication,url:photo})
      const createdPhoto = await this.photopublicationRepository.save(newPhoto)
      this.storageProvider.save(photo,"PhotosPublicationsMissions") 
      return newPhoto
    })
  
    

    return Promise.all(urlPhotos)
  }
  async list(id_publication: string): Promise<IOutputPhotoPublicationMission[]> {
    const photos = await this.photopublicationRepository.find({where:{id_publication}})
    return photos
  }
  async delete(id_publication: string): Promise<void> {
    try{
      const findPhotos = await this.photopublicationRepository .find({where:{id_publication}})
      const deletePhotos = await this.photopublicationRepository.createQueryBuilder()
      .delete()
      .from('photos_publications_missions')
      .where("id_publication = :id_publication", { id_publication:id_publication})
      .execute()
      findPhotos.forEach(photo=>{
        this.storageProvider.delete(photo.url,"PhotosPublicationsMissions")
      })
      return
    }catch(err){
      throw new AppError(`There was some error = ${err}`)
    }

  }

}
export{PhotoPublicationMissionRepository}
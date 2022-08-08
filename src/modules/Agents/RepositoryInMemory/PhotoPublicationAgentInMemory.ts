
import { IPhotosPublicationAgent } from "../DTOS/IPhotosPublicationAgentRepository"
import { PhotoPublicationAgent } from "../infra/typeorm/entities/PhotoPublicationAgent"
import { copyFile } from "../../../utils/copyFiles"
import {resolve,extname} from 'path'


class PhotosPublicationAgentInMemory implements IPhotosPublicationAgent{
  photoPublicationAgentRepositoryInMemory:PhotoPublicationAgent[] = []
  async create(id_publication: string, photos: string[]): Promise<PhotoPublicationAgent[]> {
    const photosCreated = photos.map((photo) => {
      const destination = resolve('tmp/localPhotos',`${ Math.random()}${extname(photo)}` )
      copyFile(resolve(photo), destination)
      const newPhoto = new PhotoPublicationAgent(id_publication)
      Object.assign(newPhoto,{url:destination})
      this.photoPublicationAgentRepositoryInMemory.push(newPhoto)
      return newPhoto
    })
    
    return photosCreated
  }
  async list(id_publication:string): Promise<PhotoPublicationAgent[]> {
    const allPhotosPublication = this.photoPublicationAgentRepositoryInMemory.filter((photo) => {
      return  photo.id_publication === id_publication
    })
    return allPhotosPublication
  }
  delete(id_publication: string): Promise<void> {
    this.photoPublicationAgentRepositoryInMemory.forEach((photo, index) => {
      if (String(photo.id_publication)  === id_publication ) {
        this.photoPublicationAgentRepositoryInMemory.splice(index,1)
      }
    })
    return
  }

}
export{PhotosPublicationAgentInMemory}
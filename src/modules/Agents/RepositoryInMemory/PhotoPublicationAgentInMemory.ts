import { PhotoPublicationAgent } from "../Entities/PhotoPublicationAgent";
import { DTOPhotosPublicationAgent } from "../Repository/DTOS/DTOPhotosPublicationAgentRepository";

class PhotosPublicationAgentInMemory implements DTOPhotosPublicationAgent{
  photosPublicationAgent:PhotoPublicationAgent[] = []
  async create(id_publication: string, photos: string[]): Promise<PhotoPublicationAgent[]> {
    const photosCreated = []
    photos.forEach((photo) => {
      const newPhoto = new PhotoPublicationAgent()
      Object.assign(newPhoto,{id_publication})
      this.photosPublicationAgent.push(newPhoto)
      photosCreated.push(newPhoto)
    })
    
    return photosCreated
  }
  async list(id_publication:string): Promise<PhotoPublicationAgent[]> {
    const allPhotosPublication = this.photosPublicationAgent.filter((photo) => {
      return String(photo.id_publication) === id_publication
    })
    return allPhotosPublication
  }
  delete(id_publication: string): Promise<void> {
    this.photosPublicationAgent.forEach((photo, index) => {
      if (String(photo.id_publication)  === id_publication ) {
        this.photosPublicationAgent.splice(index,1)
      }
    })
    return
  }

}
export{PhotosPublicationAgentInMemory}
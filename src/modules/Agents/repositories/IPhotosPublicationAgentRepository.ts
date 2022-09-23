import { PhotoPublicationAgent } from "../infra/typeorm/entities/PhotoPublicationAgent"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"



interface IPhotosPublicationAgent{

  create(id_publication:string, photos:string[]): Promise<PhotoPublicationAgent[]>
  
  list(id_publication:string): Promise<PhotoPublicationAgent[]>
  
  delete(id_publication:string): Promise<void>

  findPhotosByIdPublication(id_publication:string):Promise<PhotoPublicationAgent[]>
  

}

export{IPhotosPublicationAgent}
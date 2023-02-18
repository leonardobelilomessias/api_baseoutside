import { IPhotoPublicationAgentDTO } from "../DTOS/IPhotoPublicationsDTOS"
import { PhotoPublicationAgent } from "../infra/typeorm/entities/PhotoPublicationAgent"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"



interface IPhotosPublicationAgent{

  create(id_publication:string, photos:string[]): Promise<IPhotoPublicationAgentDTO[]>
  
  list(id_publication:string): Promise<IPhotoPublicationAgentDTO[]>
  
  delete(id_publication:string): Promise<void>

  findPhotosByIdPublication(id_publication:string):Promise<IPhotoPublicationAgentDTO[]>
  

}

export{IPhotosPublicationAgent}
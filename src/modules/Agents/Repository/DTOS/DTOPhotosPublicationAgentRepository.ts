import { PhotoPublicationAgent } from "../../Entities/PhotoPublicationAgent"

interface IFile{
  filename:string
}

interface DTOPhotosPublicationAgent{

  create(id_publication:string, photos:string[]): Promise<PhotoPublicationAgent[]>
  
  list(id_publication:string): Promise<PhotoPublicationAgent[]>
  
  delete(id_publication:string): Promise<void>
  

}

export{DTOPhotosPublicationAgent,IFile}
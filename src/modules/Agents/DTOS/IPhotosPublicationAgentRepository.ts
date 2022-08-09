import { PhotoPublicationAgent } from "../infra/typeorm/entities/PhotoPublicationAgent"


interface IFile{
  filename:string
}

interface IPhotosPublicationAgent{

  create(id_publication:string, photos:string[]): Promise<PhotoPublicationAgent[]>
  
  list(id_publication:string): Promise<PhotoPublicationAgent[]>
  
  delete(id_publication:string): Promise<void>
  

}

export{IPhotosPublicationAgent,IFile}
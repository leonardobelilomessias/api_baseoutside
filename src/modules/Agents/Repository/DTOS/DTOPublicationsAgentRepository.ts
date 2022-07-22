import { Agent } from "../../Entities/Agent"
import { PhotoPublicationAgent } from "../../Entities/PhotoPublicationAgent"
import { PublicationAgent } from "../../Entities/PublicationAgent"
import { IFile } from "./DTOPhotosPublicationAgentRepository"

interface ICreatePublication
{
  agent: string
  type: string
  description?: string
  content: string[]
}
interface EditPublication{
  id_publication: string
  type: string
  description?:string
}

interface ResponseCreatePublication{
  id_publication: string,
  type: string,
  content:PhotoPublicationAgent[]
 }


interface DTOPublicationsAgentRepository{
  create({agent,type,description,content}:ICreatePublication):Promise<ResponseCreatePublication>

  list():Promise<PublicationAgent[]>

  edit({id_publication,type,description}:EditPublication):Promise<PublicationAgent>

  delete(id_publication:string):Promise<PublicationAgent>

}
export{ DTOPublicationsAgentRepository,ICreatePublication,EditPublication,ResponseCreatePublication}
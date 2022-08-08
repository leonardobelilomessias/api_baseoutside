import { PhotoPublicationAgent } from "../infra/typeorm/entities/PhotoPublicationAgent"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"


interface ICreatePublication
{
  id_agent: string
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
  id_agent: string;
  id_publication: string;
  type: string;
  content:PhotoPublicationAgent[]
 }


interface IPublicationsAgentRepository{
  create({id_agent,type,description,content}:ICreatePublication):Promise<ResponseCreatePublication>

  list():Promise<PublicationAgent[]>

  edit({id_publication,type,description}:EditPublication):Promise<PublicationAgent>

  delete(id_publication:string):Promise<PublicationAgent>

}
export{ IPublicationsAgentRepository,ICreatePublication,EditPublication,ResponseCreatePublication}
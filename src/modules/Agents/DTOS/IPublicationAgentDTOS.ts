import { PhotoPublicationAgent } from "../infra/typeorm/entities/PhotoPublicationAgent"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"

interface ICreatePublicationDTO
{
  id_agent: string
  type: string
  description?: string
  content: string[]
}
interface EditPublicationDTO{
  id_publication: string
  description?:string
}

interface ResponseCreatePublicationDTO{
  id_agent: string;
  id_publication: string;
  type: string;
  description?: string;
  content:PhotoPublicationAgent[]
 }

 interface fullPublication{
  publication:PublicationAgent;
  photos:string[]
  
}
export{ICreatePublicationDTO,EditPublicationDTO,ResponseCreatePublicationDTO,fullPublication}
import { PhotoPublicationAgent } from "../infra/typeorm/entities/PhotoPublicationAgent"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"

interface IInputCreatePublicationDTO{
  id_agent_token:string
  id_agent: string
  type: string
  description?: string
  content: string[]
}
interface IPublicationAgentDTO{
  id_agent_token:string
  id_agent: string
  type: string
  description?: string

}
interface ICreatePublicationDTO{
  id_agent: string
  type: string
  description?: string
  content: string[]
}
interface IEditPublicationDTO{
  id_publication: string
  description?:string
}
interface IInputUpdatePublicationDTO{
  id_agent_token:string;
  id_publication: string;
  description?:string;
}

interface IOutputCreatePublicationDTO{
  id_agent: string;
  id_publication: string;
  type: string;
  description?: string;
  content:PhotoPublicationAgent[]
 }
 interface IOutputGenericPublicationDTO{
  id_agent?: string;
  id_publication?: string;
  type: string;
  description?: string;
  content?:PhotoPublicationAgent[]
 }

 interface IOutputListPublicationDTO{
  publication:PublicationAgent;
  photos:string[]
  
}
interface IOutpuLFetchPublicationDTO{
  publication:PublicationAgent;
  photos:IPhotos[]
  
}
interface IPhotos{
  id:string
  id_publication:string
  url:string
  created_at:string
}
export{
  IInputCreatePublicationDTO
  ,IEditPublicationDTO
  ,IOutputCreatePublicationDTO,
  IOutputListPublicationDTO,
  ICreatePublicationDTO,
IOutputGenericPublicationDTO,
IInputUpdatePublicationDTO, IPublicationAgentDTO,
IOutpuLFetchPublicationDTO


}

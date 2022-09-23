
import { EditPublicationDTO, ICreatePublicationDTO, ResponseCreatePublicationDTO } from "../DTOS/IPublicationAgentDTOS"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"



interface IPublicationsAgentRepository{
  create({id_agent,type,description,content}:ICreatePublicationDTO):Promise<ResponseCreatePublicationDTO>

  listAll(): Promise<PublicationAgent[]>

  listByIdAgent(id_agent: string)
  
  listByAgentName(name:string): Promise<PublicationAgent[]>

  edit({id_publication,description}:EditPublicationDTO):Promise<PublicationAgent>

  delete(id_publication: string): Promise<PublicationAgent>
  
  findPublicationById(id_publication:string):Promise<PublicationAgent>

}
export{ IPublicationsAgentRepository}
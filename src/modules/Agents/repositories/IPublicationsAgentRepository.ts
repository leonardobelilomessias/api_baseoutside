
import { IEditPublicationDTO, ICreatePublicationDTO, IInputCreatePublicationDTO, IOutputCreatePublicationDTO, IOutputGenericPublicationDTO, IOutputListPublicationDTO } from "../DTOS/IPublicationAgentDTOS"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"



interface IPublicationsAgentRepository{
  create({id_agent,type,description,content}:ICreatePublicationDTO):Promise<IOutputCreatePublicationDTO>

  listAll(): Promise<PublicationAgent[]>

  listByIdAgent(id_agent: string):Promise<IOutputListPublicationDTO[]>
  
  listByAgentName(name:string): Promise<PublicationAgent[]>

  edit({id_publication,description}:IEditPublicationDTO):Promise<PublicationAgent>

  delete(id_publication: string): Promise<PublicationAgent>
  
  findPublicationById(id_publication:string):Promise<PublicationAgent>

}
export{ IPublicationsAgentRepository}
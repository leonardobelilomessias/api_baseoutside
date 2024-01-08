
import { IEditPublicationDTO, ICreatePublicationDTO, IInputCreatePublicationDTO, IOutputCreatePublicationDTO, IOutputGenericPublicationDTO, IOutputListPublicationDTO, IPublicationAgentDTO, IOutpuLFetchPublicationDTO } from "../DTOS/IPublicationAgentDTOS"
import { PublicationAgent } from "../infra/typeorm/entities/PublicationAgent"



interface IPublicationsAgentRepository{
  create({id_agent,type,description,content}:ICreatePublicationDTO):Promise<IOutputCreatePublicationDTO>

  listAll(): Promise<PublicationAgent[]>

  listByIdAgent(id_agent: string):Promise<IOutputListPublicationDTO[]>
  
  listByAgentName(name:string): Promise<IPublicationAgentDTO[]>

  edit({id_publication,description}:IEditPublicationDTO):Promise<PublicationAgent>

  delete(id_publication: string): Promise<IOutputGenericPublicationDTO>
  
  findPublicationById(id_publication:string):Promise<IOutputGenericPublicationDTO>

  fetchAgentPublicationById(publication_id: string):Promise<IOutpuLFetchPublicationDTO>


}
export{ IPublicationsAgentRepository}
import { PublicationAgent } from "../../Entities/PublicationAgent"

interface CreatePublication{
  id_agent: string
  type: string
  description?:string
}
interface EditPublication{
  id_publication: string
  type: string
  description?:string
}



interface DTOPublicationsAgentRepository{
  create({id_agent,type,description}:CreatePublication):Promise<PublicationAgent>

  list():Promise<PublicationAgent[]>

  edit({id_publication,type,description}:EditPublication):Promise<PublicationAgent>

  delete(id_publication:string):Promise<PublicationAgent>

}
export{ DTOPublicationsAgentRepository,CreatePublication,EditPublication}
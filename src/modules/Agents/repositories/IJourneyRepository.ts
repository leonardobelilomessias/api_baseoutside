import { ICreateJourneyAgent } from "../DTOS/IJourneyAgentDTOS"
import { JourneyAgent } from "../infra/typeorm/entities/JourneyAgent"


interface IJourneyAgentRepository{

  create({}:ICreateJourneyAgent):Promise<JourneyAgent>

  list():Promise<JourneyAgent[]>

  listByIdAgent(id_agent:string):Promise<JourneyAgent[]>

  hidden(id:string):Promise<JourneyAgent>

  show(id:string):Promise<JourneyAgent>

  delete(id:string):Promise<JourneyAgent>
}
export{IJourneyAgentRepository}
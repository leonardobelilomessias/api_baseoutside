import { JourneyAgent } from "../infra/typeorm/entities/JourneyAgent"


interface ICreateJourneyAgent{
  id_agent:string;
  type:string;
  id_content:string;
  is_hidden?:boolean;
  is_private?:boolean;

}

interface IJourneyAgentRepository{

  create({}:ICreateJourneyAgent):Promise<JourneyAgent>

  list():Promise<JourneyAgent[]>

  listByIdAgent(id_agent:string):Promise<JourneyAgent[]>

  hidden(id:string):Promise<JourneyAgent>

  show(id:string):Promise<JourneyAgent>

  delete(id:string):Promise<JourneyAgent>
}
export{IJourneyAgentRepository,ICreateJourneyAgent}
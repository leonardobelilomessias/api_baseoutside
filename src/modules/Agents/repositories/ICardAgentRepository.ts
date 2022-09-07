import { CardAgent } from "../infra/typeorm/entities/CardAgent";


interface ICreateCardAgent{
  id_agent:string;
  description:string;
  title:string
}
interface IEditCardAgent{
  id_agent:string;
  description:string;
  title:string
}

interface ICardAgentRepository{

  create({id_agent,description}:ICreateCardAgent):Promise<CardAgent>

  edit({description,id_agent}:IEditCardAgent):Promise<CardAgent>

  listByid(id_agent:string):Promise<CardAgent>

  delete(id_agent:string):Promise<CardAgent>
}
export{ICardAgentRepository,ICreateCardAgent,IEditCardAgent}
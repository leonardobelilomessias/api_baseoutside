
import { ICreateCardAgentDTO, IEditCardAgentDTO } from "../DTOS/ICardAgentDTOS";
import { CardAgent } from "../infra/typeorm/entities/CardAgent";




interface ICardAgentRepository{

  create({id_agent,description}:ICreateCardAgentDTO):Promise<CardAgent>

  edit({description,id_agent}:IEditCardAgentDTO):Promise<CardAgent>

  listByid(id_agent:string):Promise<CardAgent>

  delete(id_agent:string):Promise<CardAgent>
}
export{ICardAgentRepository}
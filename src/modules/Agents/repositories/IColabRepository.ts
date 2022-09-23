import { ICreateColab } from "../DTOS/IColabAgentDTOS";
import { Agent } from "../infra/typeorm/entities/Agent";
import { ColabAgent } from "../infra/typeorm/entities/ColabAgent";


interface IColabRepository{
  create({ id_agent, id_colab, type }: ICreateColab): Promise<ColabAgent>
  
  listColabAgent(id_agent: string): Promise<Agent[]>
  
  listAgentColab(id_colab:string):Promise<Agent[]>
  
  toCancelColab({id_agent, id_colab}): Promise<ColabAgent>
  
  findIfExistentcolab({ id_agent, id_colab}):Promise<ColabAgent>
}
export{ IColabRepository}
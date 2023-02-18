import { ICreateColabAgentDTO, IDeleteColabAgentDTO, IOutputGenericColabAgentDTO as ColabAgent } from "../DTOS/IColabAgentDTOS";
import { Agent } from "../infra/typeorm/entities/Agent";


interface IColabRepository{
  create({ id_agent, id_colab, type }: ICreateColabAgentDTO): Promise<ColabAgent>
  
  listColabAgent(id_agent: string): Promise<Agent[]>
  
  listAgentColab(id_colab:string):Promise<Agent[]>
  
  toCancelColab({id_agent, id_colab}:IDeleteColabAgentDTO): Promise<ColabAgent>
  
  findIfExistentcolab({ id_agent, id_colab}):Promise<ColabAgent>

  listFeedColab(id_agent)
}
export{ IColabRepository}
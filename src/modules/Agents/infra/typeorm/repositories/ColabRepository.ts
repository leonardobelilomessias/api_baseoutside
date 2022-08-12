import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IColabRepository } from "../../../repositories/IColabRepositoryInMemory";
import { Agent } from "../entities/Agent";
import { ColabAgent } from "../entities/ColabAgent";


class ColabAgentRepository implements IColabRepository{
  private colabAgentRepository: Repository<ColabAgent>
  constructor() {
    this.colabAgentRepository = AppDataSource.getRepository(ColabAgent)
  }
  async create({ id_agent, id_colab, type }): Promise<ColabAgent> {
    const newColab = new ColabAgent()
    Object.assign(newColab, { id_agent, id_agent_colab: id_colab, type })
    try {
      
      const resp = await this.colabAgentRepository.save(newColab)
      return newColab
    } catch (err) {
      if(err.code ==='ER_NO_REFERENCED_ROW_2')
      throw new AppError('Invalid agent ou sponsor')
    }
  }
  listColabAgent(id_agent: string): Promise<Agent[]> {
    throw new Error("Method not implemented.");
  }
  listAgentColab(id_colab: string): Promise<Agent[]> {
    throw new Error("Method not implemented.");
  }
  toCancelColab(id_agent: any, id_agent_colab: any): Promise<ColabAgent> {
    throw new Error("Method not implemented.");
  }

}
export{ColabAgentRepository}
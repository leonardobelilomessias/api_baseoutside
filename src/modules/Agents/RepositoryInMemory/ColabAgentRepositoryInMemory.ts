import { AppError } from "../../../shared/errors/AppError"
import { Agent } from "../infra/typeorm/entities/Agent"
import { ColabAgent } from "../infra/typeorm/entities/ColabAgent"
import { IColabRepository } from "../repositories/IColabRepositoryInMemory"

class ColabAgentRepositoryInMemory implements IColabRepository{
  colabAgentInMemory: ColabAgent[]
  constructor() {
    this.colabAgentInMemory = []
  }
  async create({ id_agent, id_colab, type }): Promise<ColabAgent> {
    const findColabAgent = this.colabAgentInMemory.find(colab=>((colab.id_agent_colab ===id_colab && colab.id_agent ===id_agent)))
    if(findColabAgent) throw new AppError('Alredy exist colab')
    const newColab = new ColabAgent()
    Object.assign(newColab, { id_agent, id_agent_colab:id_colab })
    this.colabAgentInMemory.push(newColab)
    return newColab
  }
  listColabAgent(id_agent: string): Promise<Agent[]> {
    throw new Error("Method not implemented.")
  }
  listAgentColab(id_colab: string): Promise<Agent[]> {
    throw new Error("Method not implemented.")
  }
  toCancelColab(id_agent: any, id_agent_colab: any): Promise<ColabAgent> {
    throw new Error("Method not implemented.")
  }


}
export{ColabAgentRepositoryInMemory}
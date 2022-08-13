import { Agent } from "../../infra/typeorm/entities/Agent"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { IColabRepository } from "../../repositories/IColabRepositoryInMemory"

class ListColabsAgentUseCase{
  private colabAgentRepository: IColabRepository
  constructor(colabAgentRepository: IColabRepository) {
    this.colabAgentRepository = colabAgentRepository
  }
  async execute(id_agent): Promise<Agent[]>{
    const colabsAgent = await this.colabAgentRepository.listColabAgent(id_agent)
    return colabsAgent
  }

}
export{ListColabsAgentUseCase}
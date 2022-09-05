import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IColabRepository } from "../../repositories/IColabRepositoryInMemory"

class ListColabsAgentUseCase{
  private colabAgentRepository: IColabRepository
  constructor(colabAgentRepository: IColabRepository) {
    this.colabAgentRepository = colabAgentRepository
  }
  async execute(id_agent:string): Promise<Agent[]>{
    if(!id_agent) throw new AppError("Value sent of agent is undefined.")
    const colabsAgent = await this.colabAgentRepository.listColabAgent(id_agent)
    return colabsAgent
  }

}
export{ListColabsAgentUseCase}
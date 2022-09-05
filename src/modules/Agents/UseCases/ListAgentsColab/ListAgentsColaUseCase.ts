import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository"

class ListAgentsColabUseCase{
  private colabAgentRepository:ColabAgentRepository
  constructor(colabAgentRepository:ColabAgentRepository){
    this.colabAgentRepository = colabAgentRepository
  }
  async execute(id_colab:string):Promise<Agent[]>{
    if(!id_colab) throw new AppError("Value sent of  colab is undefined")
     const listAgentColab = await this.colabAgentRepository.listAgentColab(id_colab)
    return listAgentColab
  }
}
export{ListAgentsColabUseCase}
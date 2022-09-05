import { AppError } from "../../../../shared/errors/AppError"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { IColabRepository } from "../../repositories/IColabRepositoryInMemory"

class ToCancelColabAgentUseCase{
  private colabAgentRepository: IColabRepository
  constructor( colabAgentRepository: IColabRepository) {
    this.colabAgentRepository = colabAgentRepository
  }
  async execute({id_agent, id_colab}): Promise<ColabAgent>{
    if(!id_agent|| !id_colab) throw new AppError("Value sent of colab or agent is undefined ")
    const findColabAgent = await this.colabAgentRepository.findIfExistentcolab({ id_agent, id_colab })
    if (!findColabAgent) throw new AppError("Colab doesen't existe")
    const canceledColab = await this.colabAgentRepository.toCancelColab({ id_agent, id_colab })
    return canceledColab
  }

}
export{ToCancelColabAgentUseCase}
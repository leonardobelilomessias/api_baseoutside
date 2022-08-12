import { AppError } from "../../../../shared/errors/AppError"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { IColabRepository } from "../../repositories/IColabRepositoryInMemory"


class CreateColabAgentUseCase{
  private colabRepository: IColabRepository
  constructor(colabRepository: IColabRepository) {
    this.colabRepository = colabRepository
  }
  async execute({ id_agent, id_colab, type }): Promise<ColabAgent>{
    if(!id_agent|| !id_colab) throw new AppError('Invalid fild ')
    const newColab = await this.colabRepository.create({ id_agent, id_colab, type })
    return newColab
  }

}
export{CreateColabAgentUseCase}
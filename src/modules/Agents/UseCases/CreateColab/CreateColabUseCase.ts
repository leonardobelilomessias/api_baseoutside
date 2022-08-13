import { AppError } from "../../../../shared/errors/AppError"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { IColabRepository } from "../../repositories/IColabRepositoryInMemory"

class CreateColabAgentUseCase{
  private colabRepository: IColabRepository
  constructor(colabRepository: IColabRepository) {
    this.colabRepository = colabRepository
  }
  async execute({ id_agent, id_colab, type }): Promise<ColabAgent>{
    if (!id_agent || !id_colab) throw new AppError('Invalid fild ')
    if (id_agent===id_colab ) throw new AppError('Dont is allow be get colab youself ')
    const findColabAgent = await this.colabRepository.findIfExistentcolab({ id_agent, id_colab })
    if(findColabAgent) throw new AppError('Alredy exist colab')
    const newColab = await this.colabRepository.create({ id_agent, id_colab, type })
    return newColab
  }

}
export{CreateColabAgentUseCase}
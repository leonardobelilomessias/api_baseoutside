import { AppError } from "../../../../shared/errors/AppError"
import { IInputCreateColabAgentDTO, IOutputGenericColabAgentDTO } from "../../DTOS/IColabAgentDTOS"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IColabRepository } from "../../repositories/IColabRepository"

class CreateColabAgentUseCase{
  private colabRepository: IColabRepository
  private agentRepository:IAgentRepository
  constructor(colabRepository: IColabRepository,agentRepository:IAgentRepository) {
    this.colabRepository = colabRepository
    this.agentRepository = agentRepository
  }
  async execute({id_agent_token, id_agent, id_colab, type }:IInputCreateColabAgentDTO): Promise<IOutputGenericColabAgentDTO>{
    console.log(id_agent_token)
    if(id_agent!== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    if (!id_agent || !id_colab) throw new AppError('Value of agent or colab is undefined. ')
    if (id_agent===id_colab ) throw new AppError('Dont is allow be get colab some value of agent ')
    if (typeof type !== typeof Number() ) throw new AppError('Value of type must be a number ')
    const findAgentExist = await this.agentRepository.findById(id_agent)
    const findColabExist = await this.agentRepository.findById(id_colab)
    if(!findAgentExist|| !findColabExist)throw new AppError("Dont exist value of agent or sponsor")
    const findColabAgent = await this.colabRepository.findIfExistentcolab({ id_agent, id_colab })

    if(findColabAgent) throw new AppError('Alredy exist colab')
    const newColab = await this.colabRepository.create({ id_agent, id_colab, type })
    return newColab
  }

}
export{CreateColabAgentUseCase}
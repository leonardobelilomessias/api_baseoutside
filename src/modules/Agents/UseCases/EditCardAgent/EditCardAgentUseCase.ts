import { AppError } from "../../../../shared/errors/AppError"
import { IInputEditCardAgentDTO, IOutputGenericCardAgentDTO } from "../../DTOS/ICardAgentDTOS"
import { CardAgent } from "../../infra/typeorm/entities/CardAgent"
import { ICardAgentRepository } from "../../repositories/ICardAgentRepository"

class EditCardAgentUseCase{
  private cardAgentRepository:ICardAgentRepository
  constructor(cardAgentRepository:ICardAgentRepository){
    this.cardAgentRepository = cardAgentRepository
  }
  async execute({id_agent_token,id_agent,title,description}:IInputEditCardAgentDTO):Promise<IOutputGenericCardAgentDTO>{ 
    if(!id_agent)throw new AppError("Value of agent is undefined.")
    if(!title && !description) throw new AppError("Must be sent some new value")
    if(id_agent !== id_agent_token) throw new AppError("Agent authenticate havent permissio to action")
    const findAgent = await this.cardAgentRepository.listByid(id_agent)
    if(!findAgent) throw new AppError("Card Agent not found.")
    const editedAgent = await this.cardAgentRepository.edit({id_agent,title,description})
    return editedAgent
  }
}
export{
  EditCardAgentUseCase
}
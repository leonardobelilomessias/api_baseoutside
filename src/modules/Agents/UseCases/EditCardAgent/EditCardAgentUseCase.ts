import { AppError } from "../../../../shared/errors/AppError"
import { CardAgent } from "../../infra/typeorm/entities/CardAgent"
import { ICardAgentRepository } from "../../repositories/ICardAgentRepository"

class EditCardAgentUseCase{
  private cardAgentRepository:ICardAgentRepository
  constructor(cardAgentRepository:ICardAgentRepository){
    this.cardAgentRepository = cardAgentRepository
  }
  async execute({id_agent,title,description}):Promise<CardAgent>{ 
    if(!id_agent)throw new AppError("Value of agent is undefined.")
    if(!title && !description) throw new AppError("Must be sent some new value")
    const findAgent = await this.cardAgentRepository.listByid(id_agent)
    if(!findAgent) throw new AppError("Agent not found.")
    const editedAgent = await this.cardAgentRepository.edit({id_agent,title,description})
    return editedAgent
  }
}
export{
  EditCardAgentUseCase
}
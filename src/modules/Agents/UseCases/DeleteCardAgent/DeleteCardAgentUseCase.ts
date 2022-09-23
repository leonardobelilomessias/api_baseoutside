import { Request, Response } from "express"
import { AppError } from "../../../../shared/errors/AppError"
import { IInputDeleteCardAgent, IOutputGenericCardAgentDTO } from "../../DTOS/ICardAgentDTOS"
import { CardAgent } from "../../infra/typeorm/entities/CardAgent"
import { ICardAgentRepository } from "../../repositories/ICardAgentRepository"

class DeleteCardAgentUseCase{
  private cardAgentRepository:ICardAgentRepository
  constructor(cardAgentRepository:ICardAgentRepository){
    this.cardAgentRepository = cardAgentRepository
  }
  async execute({id_agent,id_agent_token}:IInputDeleteCardAgent):Promise<IOutputGenericCardAgentDTO>{ 
    if(!id_agent) throw new AppError("Value of agent is undefined.")
    console.log(id_agent_token)
    if(id_agent !== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const findCardAgent = await this.cardAgentRepository.listByid(id_agent)
    if(!findCardAgent) throw new AppError("Card Agent not found.")
    const deletedCardAgent = await this.cardAgentRepository.delete(id_agent)
    return deletedCardAgent
  }
}
export{DeleteCardAgentUseCase}
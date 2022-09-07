import { Request, Response } from "express"
import { AppError } from "../../../../shared/errors/AppError"
import { CardAgent } from "../../infra/typeorm/entities/CardAgent"
import { ICardAgentRepository } from "../../repositories/ICardAgentRepository"

class DeleteCardAgentUseCase{
  private cardAgentRepository:ICardAgentRepository
  constructor(cardAgentRepository:ICardAgentRepository){
    this.cardAgentRepository = cardAgentRepository
  }
  async execute(id_agent:string):Promise<CardAgent>{ 
    if(!id_agent) throw new AppError("Value of agent is undefined.")
    const findCardAgent = await this.cardAgentRepository.listByid(id_agent)
    if(!findCardAgent) throw new AppError("Card Agent not found.")
    const deletedCardAgent = await this.cardAgentRepository.delete(id_agent)
    return deletedCardAgent
  }
}
export{DeleteCardAgentUseCase}
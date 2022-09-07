import { AppError } from "../../../../shared/errors/AppError"
import { CardAgent } from "../../infra/typeorm/entities/CardAgent"
import { ICardAgentRepository } from "../../repositories/ICardAgentRepository"

class FindCardAgentUseCase{
  private cardAgentRepository:ICardAgentRepository
  constructor(cardAgentRepository:ICardAgentRepository){
    this.cardAgentRepository = cardAgentRepository
  }
  async execute(id_agent:string):Promise<CardAgent>{
    if(!id_agent) throw new AppError("Value of agent is undefined.")
    const findAgent = await this.cardAgentRepository.listByid(id_agent)
    return findAgent
  }
}
export{FindCardAgentUseCase}
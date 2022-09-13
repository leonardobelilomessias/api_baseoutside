import { AppError } from "../../../../shared/errors/AppError"
import { CardAgent } from "../../infra/typeorm/entities/CardAgent"
import { ICardAgentRepository } from "../../repositories/ICardAgentRepository"

class CreateCardAgentUseCase{
  private cardAgentReposotory:ICardAgentRepository
  constructor(cardAgentReposotory:ICardAgentRepository){
    this.cardAgentReposotory = cardAgentReposotory
  }
  async execute({id_agent_token, id_agent,description,title}):Promise<CardAgent>{
    if(!id_agent||!description||!title) throw new AppError(" Some Value required is undefined")
    if(id_agent !== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const findCard = await this.cardAgentReposotory.listByid(id_agent)
    if(findCard) throw new AppError("Already exist a card agent.")
    const createAgent = await this.cardAgentReposotory.create({id_agent,description,title})
    return createAgent
  }
}
export{CreateCardAgentUseCase}
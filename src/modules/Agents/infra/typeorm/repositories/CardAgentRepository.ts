import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { ICreateCardAgentDTO,IOutputGenericCardAgentDTO as CardAgent } from "../../../DTOS/ICardAgentDTOS";
import { ICardAgentRepository} from "../../../repositories/ICardAgentRepository";
//import { CardAgent } from "../entities/CardAgent";
  
class CardAgentRepository implements ICardAgentRepository{
  private cardAgentRepository:Repository<CardAgent>
  constructor(){
    this.cardAgentRepository = AppDataSource.getRepository("card_agent")
  }
  async create({ id_agent, description,title }: ICreateCardAgentDTO): Promise<CardAgent> {
    try{
      const newAgent = this.cardAgentRepository.create()
      Object.assign(newAgent,{id_agent:id_agent,description:description,title:title})
      const createAgent = await this.cardAgentRepository.save(newAgent)
      return createAgent
    }catch{
      throw new AppError("Some value are wrong")
    }

  }
  async edit({ description, id_agent,title }: ICreateCardAgentDTO): Promise<CardAgent> {
    const editAgent = await this.cardAgentRepository.findOne({where:{id_agent:id_agent}})
    Object.assign(editAgent,{description:description,id_agent:id_agent,title:title})
    const editedAgent = await this.cardAgentRepository.save(editAgent)
    return editAgent  
  }
  async listByid(id_agent: string): Promise<CardAgent> {
    const findAgent = await this.cardAgentRepository.findOne({where:{id_agent:id_agent}})
    return findAgent
  }
  async delete(id_agent: string): Promise<CardAgent> {
    const findAgent = await this.cardAgentRepository.findOne({where:{id_agent:id_agent}})
    await this.cardAgentRepository.delete({id:findAgent.id})
    return findAgent
  }

}
export{CardAgentRepository}
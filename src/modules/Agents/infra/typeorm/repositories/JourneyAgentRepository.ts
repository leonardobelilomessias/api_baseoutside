import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateJourneyAgent, IJourneyAgentDTO } from "../../../DTOS/IJourneyAgentDTOS"
import { IJourneyAgentRepository } from "../../../repositories/IJourneyRepository"
import { JourneyAgent } from "../entities/JourneyAgent"

class JourneyAgentRepository implements IJourneyAgentRepository{
  private journeyAgentRepository:Repository<JourneyAgent>
  constructor(){
    this.journeyAgentRepository = AppDataSource.getRepository("journeys_agents")
  }
  async create({id_agent,type,id_content,is_hidden,is_private }:ICreateJourneyAgent): Promise<JourneyAgent> {
    const newJourneyAgent = new JourneyAgent()
    Object.assign(newJourneyAgent,{id_agent,type,id_content,is_hidden,is_private })
    const createNewJourney = await this.journeyAgentRepository.save(newJourneyAgent)
    return createNewJourney
  }
  async list(): Promise<JourneyAgent[]> {
    const journeysAgent = await this.journeyAgentRepository.find()
    return journeysAgent
  }
  async listByIdAgent(id_agent: string): Promise<IJourneyAgentDTO[]> {
    const journeyAgent = await this.journeyAgentRepository.find({where:{id_agent}})
    return journeyAgent
  }
  async hidden(id: string): Promise<IJourneyAgentDTO> {
    const journeyAgent = await this.journeyAgentRepository.findOneBy({id})
    journeyAgent.is_hidden = true
    const journeyHidden = this.journeyAgentRepository.save(journeyAgent)
    return journeyHidden
  }
 async  show(id: string): Promise<IJourneyAgentDTO> {
    const journeyAgent = await this.journeyAgentRepository.findOneBy({id})
    journeyAgent.is_hidden = false
    const journeyHidden = this.journeyAgentRepository.save(journeyAgent)
    return journeyHidden
  }
  async delete(id: string): Promise<IJourneyAgentDTO> {
    const findJourney = await this.journeyAgentRepository.findOneBy({id})
    if(!findJourney) throw new AppError("Journey not found")
    const journeyDelete = await this.journeyAgentRepository.delete(findJourney.id)
    return findJourney
  }
}
export{JourneyAgentRepository}
import { Repository } from "typeorm/repository/Repository"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IAgentRepository } from "../../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../../repositories/IInterestsRepository"
import { IJourneyAgentRepository } from "../../../repositories/IJourneyRepository"
import { Agent } from "../entities/Agent"
import { Interests } from "../entities/Interests"
import { JourneyAgent } from "../entities/JourneyAgent"
import { JourneyAgentRepository } from "./JourneyAgentRepository"

class InterestsRepository implements IInterestsRepository{
  interestsRepository: Repository<Interests>
  agentRepository :Repository<Agent>
  journeyAgentRepository:IJourneyAgentRepository
   constructor() {
     this.interestsRepository = AppDataSource.getRepository("interests_agents")
     this.agentRepository = AppDataSource.getRepository('agents')
     this.journeyAgentRepository =  new JourneyAgentRepository()
  }
  findInterestByName(interest: string): Promise<Interests[]> {
    throw new Error("Method not implemented.")
  }

  async findInterestByAgent(id_agent): Promise<Interests[]> {
    const interestAgent = await this.interestsRepository.find({where:{id_agent}})
    return interestAgent
  }

  async findByInterest(interest:string) {
    const interestAgent = await this.interestsRepository.findBy({interests:interest})
    return interestAgent
  }

  async updateInterests(id_agent: string, interests: string[]) {

    if (interests) {
      await this.interestsRepository.createQueryBuilder()
      .delete()
      .from("interests_agents")
      .where("id_agent = :id_agent", { id_agent: id_agent })
      .execute()
      const allInterests = interests.map(interest => interest.trim())
      allInterests.forEach(async (interests) => {
        const newInterest = new Interests()
        Object.assign(newInterest,{id_agent,interests})
        await this.interestsRepository.save(newInterest)
      })

  
      return allInterests
    }
 
  }

  async findAgentByInterest(interest:string) {

 // asssingning with is active to typeorm list only active agent in condition where.
    const allInterests = await this.interestsRepository.find({
      relations:{id_agent:true},
      where:{interests:interest}
    })

    return allInterests
  }
}
export{InterestsRepository}
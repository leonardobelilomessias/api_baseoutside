import { Repository } from "typeorm/repository/Repository"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IAgentRepository } from "../../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../../repositories/IInterestsRepository"
import { Interests } from "../entities/Interests"



class InterestsRepository implements IInterestsRepository{
  interestsRepository: Repository<Interests>
  agentRepository :IAgentRepository
   constructor() {
     this.interestsRepository = AppDataSource.getRepository("interests_agents")

  }
  findInterestByName(interest: string): Promise<Interests[]> {
    throw new Error("Method not implemented.")
  }

  async findInterestByAgent(id_agent: string): Promise<Interests[]> {
    const interestAgent = await this.interestsRepository.find({ where:{id_agent}})
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

  async findAgentByInterest(interest: string[]) {
    const listInterest= interest.map(thisInterest=> ({interests:thisInterest}))
    const allInterests = await this.interestsRepository.find({
      relations: {
        id_agent:true
      },
      where: listInterest
    })
    
    const foundInterests = allInterests.map(thisInterest=>({interest:thisInterest.interests, agent:thisInterest.id_agent}))
    return foundInterests 
  }
}
export{InterestsRepository}
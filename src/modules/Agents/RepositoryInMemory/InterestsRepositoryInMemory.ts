import { Agent } from "../infra/typeorm/entities/Agent";
import { Interests } from "../infra/typeorm/entities/Interests";
import { IAgentRepository } from "../repositories/IAgentRepository";
import { IInterestsRepository } from "../repositories/IInterestsRepository";

class InterestsRepositoryInMemory implements IInterestsRepository{
  interestsRepositoryInMemory: Interests[]
  public agentRTepositoryInmemory:IAgentRepository
  constructor(agentRepository :IAgentRepository) {
    this.interestsRepositoryInMemory = []
    this.agentRTepositoryInmemory = agentRepository
  }
  async findInterestByAgent(id_agent: string): Promise<Interests[]> {
    const interests = this.interestsRepositoryInMemory.filter(interest => String(interest.id_agent) === id_agent)
    return interests
  }
  async findAgentByInterest(interest:string[]) {
    const idsAgents = []
    const interestFound = interest.forEach((thisInterest) => {
      
      this.interestsRepositoryInMemory.forEach((interestAgent) => {
        for (let key of interestAgent.interests) {
          if (key === thisInterest) {
            idsAgents.push(interestAgent.id_agent)
          }
        }
      })
    })

    const foundAgent = this.agentRTepositoryInmemory.findByInterest(idsAgents)
    return foundAgent
  }
  async updateInterests(id_agent: string, interests: string[]): Promise<string[]> {
    const IndexAgentInterest = this.interestsRepositoryInMemory.findIndex(interests => String(interests.id_agent) === id_agent)
    if (IndexAgentInterest) this.interestsRepositoryInMemory.splice(IndexAgentInterest, 1)
    const newInterests = interests.map((interest) => {
      const addInterest = new Interests()
      Object.assign(addInterest,{interests,id_agent})
      this.interestsRepositoryInMemory.push(addInterest)
      return interest
    })
    return newInterests
  }
  async findInterestByName(interest: string): Promise<Interests[]> {
    const interests = this.interestsRepositoryInMemory.filter(interest => interest === interest)
    return interests
  }

}
export{InterestsRepositoryInMemory}
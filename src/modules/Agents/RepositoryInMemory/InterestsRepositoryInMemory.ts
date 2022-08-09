import { Agent } from "../infra/typeorm/entities/Agent";
import { Interests } from "../infra/typeorm/entities/Interests";
import { IInterestsRepository } from "../repositories/IInterestsRepository";

class InterestsRepositoryInMemory implements IInterestsRepository{
  interestsRepositoryInMemory: Interests[]
  constructor() {
    this.interestsRepositoryInMemory =[]
  }
  async findInterestByAgent(id_agent: string): Promise<Interests[]> {
    const interests = this.interestsRepositoryInMemory.filter(interest => String(interest.id_agent) === id_agent)
    return interests
  }
  async findByInterestByName(interests: string[]): Promise<string[]> {
    const agentsinterests = []
    this.interestsRepositoryInMemory.forEach(interestRepository => {
      interests.forEach(interest => {
        if(interest ===interestRepository.interests) agentsinterests.push(interestRepository.id_agent)
      })
    })
    return agentsinterests
  }
  async updateInterests(id_agent: string, interests: string[]): Promise<string[]> {
    const IndexAgentInterest = this.interestsRepositoryInMemory.findIndex(interests => String(interests.id_agent) === id_agent)
    if (IndexAgentInterest) this.interestsRepositoryInMemory.splice(IndexAgentInterest, 1)
    const newInterests = interests.map((interest) => {
      const addInterest = new Interests(id_agent, interest)
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
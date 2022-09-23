import { Agent } from "../infra/typeorm/entities/Agent"
import { Interests } from "../infra/typeorm/entities/Interests"


interface IInterestsRepository{

  findInterestByAgent(id_agent: string): Promise<Interests[]>
  
  findAgentByInterest(interest:string)

  updateInterests(id_agent: string, interests: string[]): Promise<string[]>
  
  findInterestByName(interest:string):Promise<Interests[]>

}
export{IInterestsRepository}
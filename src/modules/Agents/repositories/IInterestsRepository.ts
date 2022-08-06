import { Interests } from "../infra/typeorm/entities/Interests"


interface IInterestsRepository{

  findInterestByAgent(id_agent: string): Promise<Interests[]>
  
  findByInterest(interest:string):Promise<Interests[]>

  updateInterests(id_agent: string, interests: string[]): Promise<string[]>
  
  findInterestByName(interest:string):Promise<Interests[]>

}
export{IInterestsRepository}
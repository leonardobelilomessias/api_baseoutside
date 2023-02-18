import { IInterestsDTO } from "../DTOS/IInterestAgentDTOS"
import { Interests } from "../infra/typeorm/entities/Interests"


interface IInterestsRepository{

  findInterestByAgent(id_agent: string): Promise<IInterestsDTO[]>
  
  findAgentByInterest(interest:string): Promise<IInterestsDTO[]>

  updateInterests(id_agent: string, interests: string[]): Promise<string[]>
  
  findInterestByName(interest:string):Promise<IInterestsDTO[]>

}
export{IInterestsRepository}
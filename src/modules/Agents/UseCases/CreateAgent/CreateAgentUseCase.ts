import { hash } from "bcryptjs"
import { AppError } from "../../../../shared/errors/AppError"
import { cleanEmptySpace } from "../../../../utils/cleanEmptySpace"
import { ICreateAgentDTO } from "../../DTOS/CreateAgentDTO"
import { IAgentRepository } from "../../repositories/IAgentRepository"

class CreateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentReposiotory:IAgentRepository) {
    this.agentRepository = agentReposiotory
  }
  async execute({ name, email, user_name, password ,description,vocation}:ICreateAgentDTO) {
    if(!name||!email||!user_name||!password) throw new AppError("You sent some invalid require value.")

    const agentExist = await this.agentRepository.findByEmail({ email })   
    const passwordHash = await hash(password, 8)
    if (agentExist) throw  new AppError("User already exist",200)
    const agent = await this.agentRepository.create(
      { 
        name,
        email,
        user_name,
        password:passwordHash,
        description,
        vocation}
      )
    return agent

      

  } 

}

export{CreateAgentUseCase}

function next(err: any) {
  throw new Error("Function not implemented.")
}

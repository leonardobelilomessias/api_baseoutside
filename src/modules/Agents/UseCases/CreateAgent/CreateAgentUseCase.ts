import { hash } from "bcrypt"
import { AppError } from "../../../../errors/AppError"
import { CreateAgent, DTOAgentRepository } from "../../Repository/DTOAgentRepository"

class CreateAgentUseCase{
  private agentRepository: DTOAgentRepository

  constructor(agentReposiotory:DTOAgentRepository) {
    this.agentRepository = agentReposiotory
  }
  async execute({ name, email, password }: CreateAgent) {
    try {
      const agentExist = await this.agentRepository.findByEmail({ email })    
      
      if (agentExist) {
        throw new AppError("User already exist", 200)
      }
      const passwordHash = await hash(password, 8)
      const agent = await this.agentRepository.create({ name, email, password:passwordHash })
      return agent
      
    } catch (err) {
      return err 
    }
  } 

}

export{CreateAgentUseCase}
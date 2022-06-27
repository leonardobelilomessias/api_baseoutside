import { hash } from "bcrypt"
import { AppError } from "../../../../errors/AppError"
import { AgentRepository } from "../../Repository/AgentRepository"
import { CreateAgent } from "../../Repository/DTOAgentRepository"

class CreateAgentUseCase{
  agentRepository: AgentRepository

  constructor(agentReposiotory:AgentRepository) {
    this.agentRepository = agentReposiotory
  }
  async execute({ name, email, password }: CreateAgent) {
    try {
      const agentExist = await this.agentRepository.findByEmail({ email })
    
      if (agentExist) {
        return new AppError("User already exist", 200)
      }
      const passwordHash = await hash(password, 8)
      const agent = await this.agentRepository.create({ name, email, password:passwordHash })
      return agent
      
    } catch {
      throw new  AppError("user",200) 
    }


  } 

}

export{CreateAgentUseCase}
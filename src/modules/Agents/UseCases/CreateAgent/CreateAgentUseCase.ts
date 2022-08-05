import { hash } from "bcrypt"
import { AppError } from "../../../../shared/errors/AppError"
import { IAgentRepository } from "../../repositories/IAgentRepository"



class CreateAgentUseCase{
  private agentRepository: IAgentRepository

  constructor(agentReposiotory:IAgentRepository) {
    this.agentRepository = agentReposiotory
  }
  async execute({ name, email, password }) {
    try {
      const agentExist = await this.agentRepository.findByEmail({ email })    
      
      if (agentExist) {
        throw new AppError("User already exist", 200)
      }
      const passwordHash = await hash(password, 8)
      const agent = await this.agentRepository.create({ name, email, password:passwordHash })
      return agent
      
    } catch (err) {
      console.log(err)
      return err 
    }
  } 

}

export{CreateAgentUseCase}
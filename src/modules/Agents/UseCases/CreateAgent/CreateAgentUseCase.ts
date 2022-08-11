import { hash } from "bcrypt"
import { AppError } from "../../../../shared/errors/AppError"
import { ICreateAgentDTO } from "../../DTOS/CreateAgentDTO"
import { IAgentRepository } from "../../repositories/IAgentRepository"



class CreateAgentUseCase{
  private agentRepository: IAgentRepository

  constructor(agentReposiotory:IAgentRepository) {
    this.agentRepository = agentReposiotory
  }
  async execute({ name, email, password ,description,vocation}:ICreateAgentDTO) {
      const agentExist = await this.agentRepository.findByEmail({ email })   
      if (agentExist) throw  new AppError("User already exist",200)
      const passwordHash = await hash(password, 8)
    const agent = await this.agentRepository.create({ name, email, password: passwordHash, vocation, description})
    return agent

      

  } 

}

export{CreateAgentUseCase}

function next(err: any) {
  throw new Error("Function not implemented.")
}

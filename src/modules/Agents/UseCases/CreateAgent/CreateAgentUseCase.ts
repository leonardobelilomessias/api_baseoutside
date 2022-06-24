import { AgentRepository } from "../../Repository/AgentRepository"
import { CreateAgent } from "../../Repository/DTOAgentRepository"

class CreateAgentUseCase{
  agentRepository: AgentRepository

  constructor(agentReposiotory:AgentRepository) {
    this.agentRepository = agentReposiotory
  }
  async execute({ name, email, password }: CreateAgent) {
    const agentExist = await this.agentRepository.find({ email })
    
    if (agentExist) {
      console.log("existe")
      throw Error("Agent already exist")
    }
    const agent = await this.agentRepository.create({ name, email, password })
    return agent
  }

}

export{CreateAgentUseCase}
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"



class FindAgentBySkillUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository: IAgentRepository) {
    this.agentRepository = agentRepository
  }

  async execute({ skill}): Promise<Agent[]>{
    const agentsWithSkill = await this.agentRepository.findBySkill({ skill })

    return agentsWithSkill
  }

}
export{FindAgentBySkillUseCase}
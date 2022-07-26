import { Agent } from "../../Entities/Agent"
import { IAgentRepository } from "../../Repository/IAgentRepository"


class FindAgentBySkillUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository: IAgentRepository) {
    this.agentRepository = agentRepository
  }

  async execute({ skill}): Promise<Agent[]>{
    const agentsWithSkill = await this.agentRepository.findBySkill({ skill })
    console.log(skill)
    return agentsWithSkill
  }

}
export{FindAgentBySkillUseCase}
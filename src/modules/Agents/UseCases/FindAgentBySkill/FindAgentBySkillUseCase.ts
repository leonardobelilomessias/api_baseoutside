import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericAgentDTO } from "../../DTOS/IAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { ISkillsRepository } from "../../repositories/ISkillsRepository"

class FindAgentsBySkillsUseCase{
  private agentRepository: IAgentRepository
  private skillsRepository : ISkillsRepository
  constructor(agentRepository: IAgentRepository,skillsRepositoryInMemory:ISkillsRepository) {
    this.skillsRepository = skillsRepositoryInMemory
    this.agentRepository = agentRepository
  }

  async execute(skill:string):Promise<IOutputGenericAgentDTO>{
    if(!skill) throw new AppError('Some value is undefined')
    const agentBySkills = await this.skillsRepository.findAgentBySkill(skill)
    const filterActivesAgents = await agentBySkills.filter(agent=>{
      if(agent.id_agent.is_active ===true) {
        delete agent.id_agent.password
        return agent
      }
    })
    
    return filterActivesAgents
  }

}
export{FindAgentsBySkillsUseCase}
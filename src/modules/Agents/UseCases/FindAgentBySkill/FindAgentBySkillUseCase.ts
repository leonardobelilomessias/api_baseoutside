import { AppError } from "../../../../shared/errors/AppError"
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

  async execute(skill:string){
    if(!skill) throw new AppError('Some value is undefined')
    const agentBySkills = await this.skillsRepository.findAgentBySkill(skill)
    return agentBySkills
  }

}
export{FindAgentsBySkillsUseCase}
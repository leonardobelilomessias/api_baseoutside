import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { ISkillsRepository } from "../../repositories/ISkillsRepository"
import { SkillsRepositoryInMemory } from "../../RepositoryInMemory/SkillsRepositoryInmemory"



class FindAgentsBySkillsUseCase{
  private agentRepository: IAgentRepository
  private skillsRepository : ISkillsRepository
  constructor(agentRepository: IAgentRepository,skillsRepositoryInMemory:ISkillsRepository) {
    this.skillsRepository = skillsRepositoryInMemory
    this.agentRepository = agentRepository
  }

  async execute(skills:string[]){
    if(typeof skills !== typeof Array()) throw new AppError("Values of skills must be sent as array.")
    const agentBySkills = await this.skillsRepository.findAgentBySkill(skills)
    return agentBySkills
  }

}
export{FindAgentsBySkillsUseCase}
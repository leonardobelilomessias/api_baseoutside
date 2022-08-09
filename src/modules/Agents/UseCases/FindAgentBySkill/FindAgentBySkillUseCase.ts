import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { ISkillsRepository } from "../../repositories/ISkillsRepository"
import { SkillsRepositoryInMemory } from "../../RepositoryInMemory/SkillsRepositoryInmemory"



class FindAgentsBySkillsUseCase{
  private agentRepository: IAgentRepository
  private skillsRepositoryInMemory : ISkillsRepository
  constructor(agentRepository: IAgentRepository,skillsRepositoryInMemory:ISkillsRepository) {
    this.skillsRepositoryInMemory = skillsRepositoryInMemory
    this.agentRepository = agentRepository
  }

  async execute(skills:string[]): Promise<Agent[]>{
    const IdAgentBySkills = await this.skillsRepositoryInMemory.findSkillsByName(skills)
    const agentsWithSkills = await this.agentRepository.findBySkills(IdAgentBySkills)
    return agentsWithSkills
  }

}
export{FindAgentsBySkillsUseCase}
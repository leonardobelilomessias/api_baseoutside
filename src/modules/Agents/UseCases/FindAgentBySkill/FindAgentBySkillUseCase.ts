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

  async execute(skills:string[]){
    if(typeof skills !== typeof Array()) throw new AppError("Values of skills must be sent as array.")
    const someIsEmpty = skills.every(skill=>(skill === "" ))
    if(someIsEmpty) throw new AppError('Some value is undefined')
    const agentBySkills = await this.skillsRepository.findAgentBySkill(skills)
    const filterActiveAgents= agentBySkills.filter(agents=>(agents.agent.is_active===true))
    return filterActiveAgents
  }

}
export{FindAgentsBySkillsUseCase}
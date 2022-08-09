import { Skills } from "../infra/typeorm/entities/Skills"
import { ISkillsRepository } from "../repositories/ISkillsRepository"


class SkillsRepositoryInMemory implements ISkillsRepository{
  skillsRepositoryInMemory: Skills[]
  constructor() {
    this.skillsRepositoryInMemory =[]
  }

  async ListAllSkills(): Promise<Skills[]> {
    return this.skillsRepositoryInMemory
  }
  async findSkillsByAgent(id_agent: string): Promise<Skills[]> {
    const AgentSkill = this.skillsRepositoryInMemory.filter((skill) => (id_agent === String(skill.id_agent)))
    return AgentSkill
  }

  async findSkillsByName(skills: string[]): Promise<string[]> {
    const agentsSkills = []
    this.skillsRepositoryInMemory.forEach(skillRepository => {
      skills.forEach(skill => {
        if(skill ===skillRepository.skill) agentsSkills.push(skillRepository.id_agent)
      })
    })
    return agentsSkills
  }
  
  async updateSkillsAgent(skills: string[], id_agent: string): Promise<string[]> {
    const indexAgent = this.skillsRepositoryInMemory.findIndex((skill) => { return id_agent === String(skill.id_agent) })
    if(indexAgent) this.skillsRepositoryInMemory.splice(indexAgent, 1)
    const newSkill = skills.map((skill) => {
      this.skillsRepositoryInMemory.push(new Skills(id_agent, skill))
      return skill
    })
    return newSkill
  }

}
export{SkillsRepositoryInMemory}
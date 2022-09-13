import { Skills } from "../infra/typeorm/entities/Skills"
import { IAgentRepository } from "../repositories/IAgentRepository"
import { ISkillsRepository } from "../repositories/ISkillsRepository"


class SkillsRepositoryInMemory implements ISkillsRepository{
  skillsRepositoryInMemory: Skills[]
  agentRepository: IAgentRepository
  constructor() {
    this.skillsRepositoryInMemory = []
  }

  async ListAllSkills(): Promise<Skills[]> {
    return this.skillsRepositoryInMemory
  }
  async findSkillsByAgent(id_agent: string): Promise<Skills[]> {
    const AgentSkill = this.skillsRepositoryInMemory.filter((skill) => (id_agent === String(skill.id_agent)))
    return AgentSkill
  }

  async findAgentBySkill(skill: string) {
    throw new Error("Method not implemnted")
  }
  
  async updateSkillsAgent(skills: string[], id_agent: string): Promise<string[]> {
    const indexAgent = this.skillsRepositoryInMemory.findIndex((skill) => { return id_agent === String(skill.id_agent) })
    if(indexAgent) this.skillsRepositoryInMemory.splice(indexAgent, 1)
    const newSkill = skills.map((skill) => {
      const oneNewSkill = new Skills()
      Object.assign(oneNewSkill,{id_agent, skill})
      this.skillsRepositoryInMemory.push(oneNewSkill)
      return skill
    })
    return newSkill
  }

}
export{SkillsRepositoryInMemory}
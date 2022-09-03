import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ISkillsRepository } from "../../../repositories/ISkillsRepository"
import { Skills } from "../entities/Skills"



class SkillsRepository implements ISkillsRepository{
  skillsRepository: Repository<Skills>
  constructor(){
    this.skillsRepository = AppDataSource.getRepository("skills_agents")
  }

  async ListAllSkills():Promise<Skills[]> {
    const skills = await this.skillsRepository.find()
    return skills
  }

  async findSkillsByAgent(id_agent):Promise<Skills[]> {
    const skillsCurrent = await this.skillsRepository.find({where:{id_agent:id_agent}})
    return skillsCurrent
  }
  async   findAgentBySkill(namesSkills:string[]){
    const listSkills= namesSkills.map(thisSkills=> ({skill:thisSkills}))
    const allInterests = await this.skillsRepository.find({
      relations: {
        id_agent:true
      },
      where: listSkills
    })
    const foundSkills = allInterests.map(thisInterest=>({interest:thisInterest.skill, agent:thisInterest.id_agent}))
    return foundSkills
  }

  async updateSkillsAgent(skills: string[], id_agent: string):Promise<string[]> {
    if (skills) {
      await this.skillsRepository.createQueryBuilder()
      .delete()
      .from("skills_agents")
      .where("id_agent = :id_agent", { id_agent: id_agent })
      .execute()
      const dealingSkills = skills.map((skill) => {return skill.trim()})
      const newSkills = dealingSkills.forEach(async (skill) => {
        const newSkill = new Skills()
        Object.assign(newSkill,{id_agent, skill})
        await this.skillsRepository.save(newSkill)
      })
      return dealingSkills
    }
  }

}
export{ SkillsRepository}
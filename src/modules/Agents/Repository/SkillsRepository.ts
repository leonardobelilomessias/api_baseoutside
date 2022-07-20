import { Repository } from "typeorm"
import { AppDataSource } from "../../../database"
import { Skills } from "../Entities/Skills"


class SkillsRepository{
  skillsRepository: Repository<Skills>
  constructor(){
    this.skillsRepository = AppDataSource.getRepository(Skills)
  }

  async allSkills() {
    const skills = this.skillsRepository.find()
    return skills
  }

  async findSkillsByAgent(id_agent:string) {
    const skillsCurrent = await this.skillsRepository.find({ 
      relations: {
        id_agent:true
      },
      where: {
        id_agent: {
          id:id_agent
        }
      }
    })
    return skillsCurrent
  }
  async findSkillsByName(nameSkill:string) {
    const agentsWithSkills = await this.skillsRepository.find({
      where: {
        skill:nameSkill
      }
    })
    return agentsWithSkills
  }

  async updateSkills(skills: string[], id_agent: string) {
    if (skills) {
      await this.skillsRepository.createQueryBuilder()
      .delete()
      .from(Skills)
      .where("id_agent = :id_agent", { id_agent: id_agent })
      .execute()
      const dealingSkills = skills.map((skill) => {return skill.trim()})
      const newSkills = dealingSkills.forEach(async (skill) => {
        const newSkill = new Skills(id_agent, skill)
        await this.skillsRepository.save(newSkill)
      })
      return dealingSkills
    }

  }
}
export{ SkillsRepository}
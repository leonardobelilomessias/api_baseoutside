import { ISkillsDTO } from "../DTOS/ISkillsAgentDTOS"
import { Skills } from "../infra/typeorm/entities/Skills"

interface ISkillsRepository{

  ListAllSkills(): Promise<ISkillsDTO[]>
  
  findSkillsByAgent(id_agent: string): Promise<ISkillsDTO[]>
  
  findAgentBySkill(skill:string)
  
  updateSkillsAgent(skills:string[],id_agent:string):Promise<string[]>


}
export{ISkillsRepository}
import { Skills } from "../infra/typeorm/entities/Skills"

interface ISkillsRepository{

  ListAllSkills(): Promise<Skills[]>
  
  findSkillsByAgent(id_agent: string): Promise<Skills[]>
  
  findSkillsByName(namesSkills:string[]): Promise<string[]>
  
  updateSkillsAgent(skills:string[],id_agent:string):Promise<string[]>


}
export{ISkillsRepository}
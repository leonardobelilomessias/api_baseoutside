import { IOutputAgentDTO } from "./IAgentDTOS"

interface ISkillsDTO{


    id: string
  
    skill: string
  
    id_agent: IOutputAgentDTO 
}
export {ISkillsDTO}
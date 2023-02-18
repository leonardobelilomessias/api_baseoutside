import { IOutputAgentDTO } from "./IAgentDTOS"

interface IInterestsDTO {

  id?: string

  interests: string

  id_agent: IOutputAgentDTO
  
  
}
export{IInterestsDTO}
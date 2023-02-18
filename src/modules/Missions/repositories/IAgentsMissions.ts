import { IOutputAgentMissionDTO } from "../dtos/IAgentMissionDTOS"
import { AgentMission } from "../infra/typeorm/entities/AgentMission"

interface IAgentsMissions{

  create({ id_agent, id_mission }): Promise<IOutputAgentMissionDTO>
  
  findAgentMission({ id_agent, id_mission }): Promise<IOutputAgentMissionDTO>
  
  delete({ id_agent, id_mission }): Promise<IOutputAgentMissionDTO>

  findAllAgentsMission(id_mission:string): Promise<IOutputAgentMissionDTO[]>
  
  findAllMissionsAgent(id_agent:string):Promise<IOutputAgentMissionDTO[]>

  findByIdAgent(id_agent:string):Promise<IOutputAgentMissionDTO>

}
export{IAgentsMissions}
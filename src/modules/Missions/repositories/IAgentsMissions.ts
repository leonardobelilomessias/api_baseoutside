import { AgentMission } from "../infra/typeorm/entities/AgentMission"

interface IAgentsMissions{

  create({ id_agent, id_mission }): Promise<AgentMission>
  
  findAgentMission({ id_agent, id_mission }): Promise<AgentMission>
  
  delete({ id_agent, id_mission }): Promise<AgentMission>

  findAllAgentsMission(id_mission:string): Promise<AgentMission[]>
  
  findAllMissionsAgent(id_agent:string):Promise<AgentMission[]>

}
export{IAgentsMissions}
import { AdminMission } from "../infra/typeorm/entities/AdminMission"
import { AgentMission } from "../infra/typeorm/entities/AgentMission"

interface IAdminMissionRepository{

  createAdminMission({ id_mission, id_agent, type }): Promise<AdminMission>

  findAdminMission({id_agent,id_mission}):Promise<AdminMission>
  
  updateAdminMission({ id_agent, id_mission ,type}): Promise<AdminMission>
  
  deleteAdminMission({id_agent,id_mission}):Promise<AdminMission> 

  listAdminsMission(id_mission:string):Promise<AdminMission[]>

  findAgentInMission({id_agent,id_mission}):Promise<AgentMission>
}
export{IAdminMissionRepository}
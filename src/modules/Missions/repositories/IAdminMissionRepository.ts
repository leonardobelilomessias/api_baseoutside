import { IOutputAdminMissionDTO } from "../dtos/IAdminMissionDTOS"
import { IOutputAgentMissionDTO } from "../dtos/IAgentMissionDTOS"
import { AdminMission } from "../infra/typeorm/entities/AdminMission"
import { AgentMission } from "../infra/typeorm/entities/AgentMission"

interface IAdminMissionRepository{

  createAdminMission({ id_mission, id_agent, type }): Promise<IOutputAdminMissionDTO>

  findAdminMission({id_agent,id_mission}):Promise<IOutputAdminMissionDTO>
  
  updateAdminMission({ id_agent, id_mission ,type}): Promise<IOutputAdminMissionDTO>
  
  deleteAdminMission({id_agent,id_mission}):Promise<IOutputAdminMissionDTO> 

  listAdminsMission(id_mission:string):Promise<IOutputAdminMissionDTO[]>
  
  findCreatorMission(id_mission:string):Promise<string>

  findAgentInMission({id_agent,id_mission}):Promise<IOutputAgentMissionDTO>



}
export{IAdminMissionRepository}
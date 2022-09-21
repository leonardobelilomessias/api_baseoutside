import { AdminDepartament } from "../infra/typeorm/entities/AdminDepartament"
import { AgentDepartament } from "../infra/typeorm/entities/AgentDepartament"


interface IAdminDepartamentRepository{

  createAdminDepartament({ id_mission, id_agent, type }): Promise<AdminDepartament>

  findAdminDepartament({id_agent,id_mission}):Promise<AdminDepartament>
  
  updateAdminDepartament({ id_agent, id_mission ,type}): Promise<AdminDepartament>
  
  deleteAdminDepartament({id_agent,id_mission}):Promise<AdminDepartament> 

  listAdminsMission(id_mission:string):Promise<AdminDepartament[]>
  
  findCreatorMission(id_mission:string):Promise<string>

  findAgentInMission({id_agent,id_mission}):Promise<AgentDepartament>

}
export{IAdminDepartamentRepository}
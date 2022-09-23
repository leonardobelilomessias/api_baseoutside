import { AdminDepartament } from "../infra/typeorm/entities/AdminDepartament"
import { AgentDepartament } from "../infra/typeorm/entities/AgentDepartament"


interface IAdminDepartamentRepository{

  createAdminDepartament({ id_departament, id_agent, type }): Promise<AdminDepartament>

  findAdminDepartament({id_agent,id_departament}):Promise<AdminDepartament>
  
  updateAdminDepartament({ id_agent, id_departament ,type}): Promise<AdminDepartament>
  
  deleteAdminDepartament({id_agent,id_departament}):Promise<AdminDepartament> 

  listAdminsdepartament(id_departament:string):Promise<AdminDepartament[]>
  
  findCreatordepartament(id_departament:string):Promise<string>

  findAgentIndepartament({id_agent,id_departament}):Promise<AgentDepartament>

}
export{IAdminDepartamentRepository}
import { IAdminDepartamentDTO } from "../dtos/IAdminDepartamentDTO"
import { IOutputAgentDepartamentAcionDTO } from "../dtos/IAgentDepartamentsDTOS"
import { AdminDepartament } from "../infra/typeorm/entities/AdminDepartament"
import { AgentDepartament } from "../infra/typeorm/entities/AgentDepartament"


interface IAdminDepartamentRepository{

  createAdminDepartament({ id_departament, id_agent, type }): Promise<IAdminDepartamentDTO>

  findAdminDepartament({id_agent,id_departament}):Promise<IAdminDepartamentDTO>
  
  updateAdminDepartament({ id_agent, id_departament ,type}): Promise<IAdminDepartamentDTO>
  
  deleteAdminDepartament({id_agent,id_departament}):Promise<IAdminDepartamentDTO> 

  listAdminsdepartament(id_departament:string):Promise<IAdminDepartamentDTO[]>
  
  findCreatordepartament(id_departament:string):Promise<string>

  findAgentIndepartament({id_agent,id_departament}):Promise<IOutputAgentDepartamentAcionDTO>

}
export{IAdminDepartamentRepository}
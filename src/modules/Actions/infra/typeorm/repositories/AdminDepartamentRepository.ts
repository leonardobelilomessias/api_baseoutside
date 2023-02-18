import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IAdminDepartamentDTO } from "../../../dtos/IAdminDepartamentDTO"
import { IOutputAgentDepartamentAcionDTO } from "../../../dtos/IAgentDepartamentsDTOS"
import { IAdminDepartamentRepository } from "../../../repositories/IAdminDepartamentRepository"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"
import { AdminDepartament } from "../entities/AdminDepartament"
import { AgentDepartament } from "../entities/AgentDepartament"

class AdminDepartamentRepository implements IAdminDepartamentRepository{

  constructor(){

  }
  createAdminDepartament({ id_departament, id_agent, type }: { id_departament: any; id_agent: any; type: any }): Promise<IAdminDepartamentDTO> {
    throw new Error("Method not implemented.")
  }
  findAdminDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any }): Promise<IAdminDepartamentDTO> {
    throw new Error("Method not implemented.")
  }
  updateAdminDepartament({ id_agent, id_departament, type }: { id_agent: any; id_departament: any; type: any }): Promise<IAdminDepartamentDTO> {
    throw new Error("Method not implemented.")
  }
  deleteAdminDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any }): Promise<IAdminDepartamentDTO> {
    throw new Error("Method not implemented.")
  }
  listAdminsdepartament(id_departament: string): Promise<IAdminDepartamentDTO[]> {
    throw new Error("Method not implemented.")
  }
  findCreatordepartament(id_departament: string): Promise<string> {
    throw new Error("Method not implemented.")
  }
  findAgentIndepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any }): Promise<IOutputAgentDepartamentAcionDTO> {
    throw new Error("Method not implemented.")
  }

  
}
export{AdminDepartamentRepository}
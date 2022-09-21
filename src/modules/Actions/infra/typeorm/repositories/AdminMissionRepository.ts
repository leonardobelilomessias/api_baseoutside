import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IAdminDepartamentRepository } from "../../../repositories/IAdminDepartamentRepository"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"
import { AdminDepartament } from "../entities/AdminDepartament"
import { AgentDepartament } from "../entities/AgentDepartament"

class AdminDepartamentRepository implements IAdminDepartamentRepository{

  constructor(){

  }
  createAdminDepartament({ id_mission, id_agent, type }: { id_mission: any; id_agent: any; type: any }): Promise<AdminDepartament> {
    throw new Error("Method not implemented.")
  }
  findAdminDepartament({ id_agent, id_mission }: { id_agent: any; id_mission: any }): Promise<AdminDepartament> {
    throw new Error("Method not implemented.")
  }
  updateAdminDepartament({ id_agent, id_mission, type }: { id_agent: any; id_mission: any; type: any }): Promise<AdminDepartament> {
    throw new Error("Method not implemented.")
  }
  deleteAdminDepartament({ id_agent, id_mission }: { id_agent: any; id_mission: any }): Promise<AdminDepartament> {
    throw new Error("Method not implemented.")
  }
  listAdminsMission(id_mission: string): Promise<AdminDepartament[]> {
    throw new Error("Method not implemented.")
  }
  findCreatorMission(id_mission: string): Promise<string> {
    throw new Error("Method not implemented.")
  }
  findAgentInMission({ id_agent, id_mission }: { id_agent: any; id_mission: any }): Promise<AgentDepartament> {
    throw new Error("Method not implemented.")
  }
  
}
export{AdminDepartamentRepository}
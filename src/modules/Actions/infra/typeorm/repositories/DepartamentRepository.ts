import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IDepartamentRepository, ICreateDepartament, IEditDepartement } from "../../../repositories/IDepartamentRepository";
import { AgentDepartament } from "../entities/AgentDepartament";
import { Departament } from "../entities/Departament";



class DepartamentRepository implements IDepartamentRepository{
  private departamentRepository:Repository<Departament>
  private agentDepartamentRepository:Repository<AgentDepartament>
  constructor(){
    this.agentDepartamentRepository = AppDataSource.getRepository(AgentDepartament)
    this.departamentRepository = AppDataSource.getRepository(Departament)

  }

  async create({ id_action, name, description, agents_limit, agents_necessary }: ICreateDepartament): Promise<Departament> {
    
    const newAction = new Departament()
    Object.assign(newAction,{ id_action, name, description, agents_limit, agents_necessary })
    const createdDepartament = await this.departamentRepository.save(newAction)
    return createdDepartament
  
  }
  async listAll(id_action:string): Promise<Departament[]> {
    const listDepartament = await this.departamentRepository.find({where:{id_action:id_action}})
    return listDepartament
  }

  listDepartamentAgent(id_agent: string): Promise<Departament[]> {
    throw new Error("Method not implemented.");
  }
  edit({ id, name, description, agents_limit, agents_necessary }: IEditDepartement): Promise<Departament> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<Departament> {
    const findDepartament = await this.departamentRepository.findOneBy({id})
    if(!findDepartament)throw new AppError("Departament not found.")
    await this.departamentRepository.delete({id})
    return findDepartament
  }
  async createAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<AgentDepartament> {
    try{
      const newAgentDepartament = new AgentDepartament()
      Object.assign(newAgentDepartament,{id_agent,id_departament})
      const createAgentDepartament = await this.agentDepartamentRepository.save(newAgentDepartament)
      return createAgentDepartament
    }catch{
      throw new AppError("Some value is wrong. Confirm if there is the agent or departament")
    }
  }
 async  listAgentsDepartament(id_departament: any): Promise<AgentDepartament[]> {
   
  const listAgentsDepartament = await this.agentDepartamentRepository.findBy({id_departament})
  
  return listAgentsDepartament  
}
  deleteAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<AgentDepartament> {
    throw new Error("Method not implemented.");
  }

}
export{DepartamentRepository}
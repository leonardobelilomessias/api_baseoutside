import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IDepartamentRepository, ICreateDepartament, IEditDepartement } from "../../../repositories/IDepartamentRepository";
import { AgentDepartament } from "../entities/AgentDepartament";
import { Departament } from "../entities/Departament";



class DepartamentRepository implements IDepartamentRepository{
  private departamentRepository:Repository<Departament>
  constructor(){
    this.departamentRepository = AppDataSource.getRepository(Departament)
  }
  createAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<AgentDepartament> {
    throw new Error("Method not implemented.");
  }
  listAgentsDepartament(id_departament: any): Promise<AgentDepartament> {
    throw new Error("Method not implemented.");
  }
  deleteAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<AgentDepartament> {
    throw new Error("Method not implemented.");
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

}
export{DepartamentRepository}
import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IDepartamentRepository, ICreateDepartament, IEditDepartement } from "../../../repositories/IDepartamentRepository";
import { Departament } from "../entities/Departament";



class DepartamentRepository implements IDepartamentRepository{
  private departamentRepository:Repository<Departament>
  constructor(){
    this.departamentRepository = AppDataSource.getRepository(Departament)
  }
  async create({ id_action, name, description, agents_limit, agents_necessary }: ICreateDepartament): Promise<Departament> {
    
    const newAction = new Departament()
    Object.assign(newAction,{ id_action, name, description, agents_limit, agents_necessary })
    const createdDepartament = await this.departamentRepository.save(newAction)
    return createdDepartament
  
  }
  listAll(): Promise<Departament[]> {
    throw new Error("Method not implemented.");
  }
  listAgentsDepartament(id: string): Promise<Departament[]> {
    throw new Error("Method not implemented.");
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
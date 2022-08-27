import { Departament } from "../infra/typeorm/entities/Departament";
import { ICreateDepartament, IDepartamentRepository, IEditDepartement } from "../repositories/IDepartamentRepository";

class DepartamentRepositoryInMemory implements IDepartamentRepository{
    private departamentRepositoryInMemory:Departament[]
    constructor(){
      this.departamentRepositoryInMemory = []
    }
  async create({ id_action, name, description, agents_limit, agents_necessary }: ICreateDepartament): Promise<Departament> {
    const newDepartament = new Departament()
    Object.assign(newDepartament,{ id_action, name, description, agents_limit, agents_necessary })
    const createdDepartament = await this.departamentRepositoryInMemory.push(newDepartament)
    return newDepartament
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
  delete(id: String): Promise<Departament> {
    throw new Error("Method not implemented.");
  }

}
export{DepartamentRepositoryInMemory}
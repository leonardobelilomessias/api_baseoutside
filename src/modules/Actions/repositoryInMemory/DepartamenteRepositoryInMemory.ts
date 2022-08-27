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
  async listAll(id_action:string): Promise<Departament[]> {
    const listDepartament = await this.departamentRepositoryInMemory.filter(depatament =>(depatament.id_action === id_action))
    return listDepartament
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
  async delete(id: String): Promise<Departament> {
    const findDepartament = await this.departamentRepositoryInMemory.findIndex(departamet=>(departamet.id ===id))
    const deleteDepartament = await this.departamentRepositoryInMemory.slice(findDepartament,1)
    return deleteDepartament[0]
  }

}
export{DepartamentRepositoryInMemory}
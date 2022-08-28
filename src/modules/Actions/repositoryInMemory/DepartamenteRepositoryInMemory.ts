import { AgentDepartament } from "../infra/typeorm/entities/AgentDepartament";
import { Departament } from "../infra/typeorm/entities/Departament";
import { ICreateDepartament, IDepartamentRepository, IEditDepartement } from "../repositories/IDepartamentRepository";

class DepartamentRepositoryInMemory implements IDepartamentRepository{
    private departamentRepositoryInMemory:Departament[]
    private agentsDepartamentRepositoryInMemory :AgentDepartament[]
    
    constructor(){
      this.departamentRepositoryInMemory = []
      this.agentsDepartamentRepositoryInMemory = []

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
  async createAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<AgentDepartament> {
    const newAgentDepartament = new AgentDepartament()
    Object.assign(newAgentDepartament,{id_agent,id_departament})
    this.agentsDepartamentRepositoryInMemory.push(newAgentDepartament)
    return newAgentDepartament
  }
  listAgentsDepartament(id_departament: any): Promise<AgentDepartament[]> {
    throw new Error("Method not implemented.");
  }
  deleteAgentDepartament({ id_agent, id_departament }: { id_agent: any; id_departament: any; }): Promise<AgentDepartament> {
    throw new Error("Method not implemented.");
  }
}
export{DepartamentRepositoryInMemory}
import { IDepartamentRepository, ICreateDepartament, IEditDepartement } from "../../../repositories/IDepartamentRepository";
import { Departament } from "../entities/Departament";



class DepartamentRepository implements IDepartamentRepository{
  create({ id_action, name, description, agents_limit, agents_necessary }: ICreateDepartament): Promise<Departament> {
    throw new Error("Method not implemented.");
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
export{DepartamentRepository}
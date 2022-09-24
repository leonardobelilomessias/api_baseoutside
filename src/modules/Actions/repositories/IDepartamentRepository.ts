import { AgentDepartament } from '../infra/typeorm/entities/AgentDepartament';
import {Departament} from '../infra/typeorm/entities/Departament';

interface IEditDepartement{
  id:string;
  name?:string;
  description?:string;
  agents_limit?:string;
  agents_necessary?:string;
}

interface IDepartamentRepository{

  create({id_action,name,description,agents_limit,agents_necessary}):Promise<Departament>

  listAll(id_action:string):Promise<Departament[]>

  listDepartamentAgent(id_agent:string):Promise<Departament[]>
  
  findAgentDepartament({id_agent,id_departament}):Promise<AgentDepartament>

  edit({id,name,description,agents_limit,agents_necessary}):Promise<Departament>

  delete(id:String):Promise<Departament>

  createAgentDepartament({id_agent,id_departament}):Promise<AgentDepartament>

  listAgentsDepartament(id_departament):Promise<AgentDepartament[]>

  deleteAgentDepartament({id_agent,id_departament}):Promise<AgentDepartament>

  findDepartamentById({id_departament}):Promise<Departament>


}
export{IDepartamentRepository,IEditDepartement}
import { IInputCreateDepartamentActionDTO, IOutputAgentDepartamentDTO, IOutputCreateDepartamentActionDTO, IOutputGenericDepartamentActionDTO } from '../dtos/IDepartamentActionDTOS';
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

  create({id_action,name,description,agents_limit,agents_necessary}):Promise<IOutputCreateDepartamentActionDTO>

  listAll(id_action:string):Promise<IOutputGenericDepartamentActionDTO[]>
  
  findDepartamentById({id_departament}):Promise<IOutputGenericDepartamentActionDTO>
  
  findAgentDepartament({id_agent,id_departament}):Promise<IOutputAgentDepartamentDTO>
  
  edit({id,name,description,agents_limit,agents_necessary}):Promise<IOutputGenericDepartamentActionDTO>

  listDepartamentAgent(id_agent:string):Promise<IOutputGenericDepartamentActionDTO[]>

  delete(id:String):Promise<IOutputGenericDepartamentActionDTO>

  createAgentDepartament({id_agent,id_departament}):Promise<IOutputAgentDepartamentDTO>

  listAgentsDepartament(id_departament):Promise<IOutputAgentDepartamentDTO[]>


  deleteAgentDepartament({id_agent,id_departament}):Promise<IOutputAgentDepartamentDTO>



}
export{IDepartamentRepository,IEditDepartement}
import {Departament} from '../infra/typeorm/entities/Departament';

interface ICreateDepartament{
  id_action:string;
  name:string;
  description:string;
  agents_limit?:string;
  agents_necessary?:string;
}
interface IEditDepartement{
  id:string;
  name?:string;
  description?:string;
  agents_limit?:string;
  agents_necessary?:string;
}

interface IDepartamentRepository{

  create({id_action,name,description,agents_limit,agents_necessary}:ICreateDepartament):Promise<Departament>

  listAll():Promise<Departament[]>

  listAgentsDepartament(id:string):Promise<Departament[]>

  listDepartamentAgent(id_agent:string):Promise<Departament[]>

  edit({id,name,description,agents_limit,agents_necessary}:IEditDepartement):Promise<Departament>

  delete(id:String):Promise<Departament>

}
export{IDepartamentRepository,ICreateDepartament,IEditDepartement}
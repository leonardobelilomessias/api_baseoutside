import { IOutputWarningDepartamentDTO } from "../dtos/IWarningDepartamentDTOS";
import { WarningsDepartament } from "../infra/typeorm/entities/WarningDepartament";


interface IEditWarningsDepartamentDTO{
  id:string;
  title:string;
  content:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IWarningsDepartamentRepository{

  create({id_departament,id_creator,title,content,priority,is_active,state,type}):Promise<IOutputWarningDepartamentDTO>

  findById(id:string):Promise<IOutputWarningDepartamentDTO>

  listByIdDepartament(id_departament:string):Promise<IOutputWarningDepartamentDTO[]>

  listByStatus({state,id_departament}):Promise<IOutputWarningDepartamentDTO[]>

  listByPriority({priority,id_departament}):Promise<IOutputWarningDepartamentDTO[]>

  listByType({type,id_departament}):Promise<IOutputWarningDepartamentDTO[]>
  
  edit({id,title,content,priority,is_active,state,type}):Promise<IOutputWarningDepartamentDTO>

  delete(id:string):Promise<IOutputWarningDepartamentDTO>

}

export{IEditWarningsDepartamentDTO,IWarningsDepartamentRepository}
import { WarningsDepartament } from "../infra/typeorm/entities/WarningDepartament";

interface ICreateWarningsDepartamentDTO{
  id_departament:string;
  id_creator:string;
  title:string;
  content:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
}
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

  create({id_departament,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsDepartamentDTO):Promise<WarningsDepartament>

  findById(id:string):Promise<WarningsDepartament>

  listByIdDepartament(id_departament:string):Promise<WarningsDepartament[]>

  listByStatus({state,id_departament}):Promise<WarningsDepartament[]>

  listByPriority({priority,id_departament}):Promise<WarningsDepartament[]>

  listByType({type,id_departament}):Promise<WarningsDepartament[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsDepartamentDTO):Promise<WarningsDepartament>

  delete(id:string):Promise<WarningsDepartament>

}

export{ICreateWarningsDepartamentDTO,IEditWarningsDepartamentDTO,IWarningsDepartamentRepository}
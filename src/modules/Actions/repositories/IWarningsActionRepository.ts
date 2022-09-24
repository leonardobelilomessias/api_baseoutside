import { WarningsAction } from "../infra/typeorm/entities/WarningAction";

interface ICreateWarningsActionDTO{
  id_action:string;
  id_creator:string;
  title:string;
  content:string;
  priority?:number;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IEditWarningsActionDTO{
  id:string;
  title:string;
  content:string;
  priority?:number;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IWarningsActionRepository{

  create({id_action,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsActionDTO):Promise<WarningsAction>

  findById(id:string):Promise<WarningsAction>

  listByIdAction(id_action:string):Promise<WarningsAction[]>

  listByStatus({state,id_action}):Promise<WarningsAction[]>

  listByPriority({priority,id_action}):Promise<WarningsAction[]>

  listByType({type,id_action}):Promise<WarningsAction[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsActionDTO):Promise<WarningsAction>

  delete(id:string):Promise<WarningsAction>

}

export{ICreateWarningsActionDTO,IEditWarningsActionDTO,IWarningsActionRepository}
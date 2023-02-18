import { IOutputGenericWarnigActionDTO } from "../dtos/IWarningsActionsDTOS";
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

  create({id_action,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsActionDTO):Promise<IOutputGenericWarnigActionDTO>

  findById(id:string):Promise<IOutputGenericWarnigActionDTO>

  listByIdAction(id_action:string):Promise<IOutputGenericWarnigActionDTO[]>

  listByStatus({state,id_action}):Promise<IOutputGenericWarnigActionDTO[]>

  listByPriority({priority,id_action}):Promise<IOutputGenericWarnigActionDTO[]>

  listByType({type,id_action}):Promise<IOutputGenericWarnigActionDTO[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsActionDTO):Promise<IOutputGenericWarnigActionDTO>

  delete(id:string):Promise<IOutputGenericWarnigActionDTO>

}

export{ICreateWarningsActionDTO,IEditWarningsActionDTO,IWarningsActionRepository}
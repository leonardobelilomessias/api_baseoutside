import { WarningsTask } from "../infra/typeorm/entities/WarningTask";

interface ICreateWarningsTaskDTO{
  id_task:string;
  id_creator:string;
  title:string;
  content:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IEditWarningsTaskDTO{
  id:string;
  title:string;
  content:string;
  priority?:string;
  type?:number;
  state?:number;
  is_active?:boolean;
}
interface IWarningsTaskRepository{

  create({id_task,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsTaskDTO):Promise<WarningsTask>

  findById(id:string):Promise<WarningsTask>

  listByIdTask(id_task:string):Promise<WarningsTask[]>

  listByStatus({state,id_task}):Promise<WarningsTask[]>

  listByPriority({priority,id_task}):Promise<WarningsTask[]>

  listByType({type,id_task}):Promise<WarningsTask[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsTaskDTO):Promise<WarningsTask>

  delete(id:string):Promise<WarningsTask>

}

export{ICreateWarningsTaskDTO,IEditWarningsTaskDTO,IWarningsTaskRepository}
import { IOutputWarningsTaskDTO } from "../dtos/IWarningsTasksDTO";
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

  create({id_task,id_creator,title,content,priority,is_active,state,type}:ICreateWarningsTaskDTO):Promise<IOutputWarningsTaskDTO>

  findById(id:string):Promise<IOutputWarningsTaskDTO>

  listByIdTask(id_task:string):Promise<IOutputWarningsTaskDTO[]>

  listByStatus({state,id_task}):Promise<IOutputWarningsTaskDTO[]>

  listByPriority({priority,id_task}):Promise<IOutputWarningsTaskDTO[]>

  listByType({type,id_task}):Promise<IOutputWarningsTaskDTO[]>
  
  edit({id,title,content,priority,is_active,state,type}:IEditWarningsTaskDTO):Promise<IOutputWarningsTaskDTO>

  delete(id:string):Promise<IOutputWarningsTaskDTO>

}

export{ICreateWarningsTaskDTO,IEditWarningsTaskDTO,IWarningsTaskRepository}
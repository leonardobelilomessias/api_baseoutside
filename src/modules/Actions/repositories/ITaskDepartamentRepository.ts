import { IOutputTaskDepartamentDTO } from "../dtos/ITasksDepartamentsActionDTOS";
import {  TaskDepartament } from "../infra/typeorm/entities/TaskDepartament";





interface ICreateTaskDepartament { 
  title: string
  description: string,
  id_action:string,
  local?:string;
  is_active?:boolean;
  state?:number;
  agents_necessary?:number;
  agents_limit?:number;
  priority?:number;
  date_limit_subscribe?:Date;
  is_require_skill?:number;
  skill_require?:string;
  id_mission:string;
  id_departament:string;
}
interface IEditTaskDepartament { 
  id:string;
  id_departament:string;
  title?: string
  description?: string,
  local?:string;
  is_active?:boolean;
  state?:number;
  agents_necessary?:number;
  agents_limit?:number;
  priority?:number;
  date_limit_subscribe?:Date;
  is_require_skill?:number;
  skill_require?:string;

}

interface ITaskDepartamentRepository{

  create({title,description,id_action,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_mission,id_departament}): Promise<IOutputTaskDepartamentDTO>

  findTaskDepartamentById({id}): Promise<IOutputTaskDepartamentDTO>

  findTaskDepartamentByTitle({title}):Promise<IOutputTaskDepartamentDTO>

  listAllTaskDepartament(id_departament:string):Promise<IOutputTaskDepartamentDTO[]>

  listTasksDepartamentByAction(id_action:string):Promise<IOutputTaskDepartamentDTO[]>

  listTasksDepartamentByLocal(local:string):Promise<IOutputTaskDepartamentDTO[]>

  listTasksDepartamentByMisssion(id_mission:string):Promise<IOutputTaskDepartamentDTO[]>

  editTaskDepartament({id,title,description,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_departament}):Promise<IOutputTaskDepartamentDTO>

  deleteTaskDepartament(id:string):Promise<IOutputTaskDepartamentDTO>





}
export{ITaskDepartamentRepository,ICreateTaskDepartament,IEditTaskDepartament}
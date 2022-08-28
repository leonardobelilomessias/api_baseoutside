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
  id_action?:string,
  local?:string;
  is_active?:boolean;
  state?:number;
  agents_necessary?:number;
  agents_limit?:number;
  priority?:number;
  date_limit_subscribe?:Date;
  is_require_skill?:number;
  skill_require?:string;
  id_mission?:string;
}

interface ITaskDepartamentRepository{

  create({title,description,id_action,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_mission,id_departament}:ICreateTaskDepartament): Promise<TaskDepartament>

  findTaskDepartamentById({id}): Promise<TaskDepartament>

  findTaskDepartamentByTitle({title}):Promise<TaskDepartament>

  listAllTaskDepartament(id_departament:string):Promise<TaskDepartament>

  listTasksDepartamentByAction(id_action:string):Promise<TaskDepartament>

  listTasksDepartamentByLocal(local:string):Promise<TaskDepartament>

  listTasksDepartamentByMisssion(id_mission:string):Promise<TaskDepartament>

  editTaskDepartament({id,id_departament}):Promise<TaskDepartament>

  deleteTaskDepartament({id,title,description,id_action,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_mission,id_departament}:IEditTaskDepartament):Promise<TaskDepartament>





}
export{ITaskDepartamentRepository,ICreateTaskDepartament,IEditTaskDepartament}
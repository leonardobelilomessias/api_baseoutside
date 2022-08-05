import { Task } from "../infra/typeorm/entities/Task"




interface ICreateTask { 
  title: string
  description: string,
  id_action:string
}

interface ITaskRepository{
  create({title,description,id_action}:ICreateTask): Promise<Task>
  list(): Promise<Task[]>
  findById({id}): Promise<Task>
  findByTitle({title}):Promise<Task>

}
export{ITaskRepository,ICreateTask}
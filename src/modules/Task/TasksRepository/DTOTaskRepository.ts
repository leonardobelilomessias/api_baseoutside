import { Task } from "../Entities/Task"


interface ICreateTask { 
  title: string
  description: string,
  id_action:string
}

interface DTOTaskRepository{
  create({title,description,id_action}:ICreateTask): Promise<Task>
  list(): Promise<Task[]>
  findById({id}): Promise<Task>
  findByTitle({title}):Promise<Task>

}
export{DTOTaskRepository,ICreateTask}
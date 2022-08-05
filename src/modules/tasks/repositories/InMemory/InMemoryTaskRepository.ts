import { Task } from "../../infra/typeorm/entities/Task"
import { ITaskRepository } from "../ITaskRepository"




class InMemoryTaskRepository implements ITaskRepository{
  private taskRepository:Task[]= []

  async create({ title, description, id_action }): Promise<Task> {
    const newTask = new Task()
    Object.assign(newTask,{title,description,id_action})
     this.taskRepository.push(newTask)
    return newTask
  }
  async list(): Promise<Task[]> {
    const allTask = this.taskRepository
    return allTask
  }
  async findById({ id }: { id: any }): Promise<Task> {
    throw new Error("Method not implemented.")
  }
  async findByTitle({ title }: { title: any }): Promise<Task> {
    throw new Error("Method not implemented.")
  }

}
export{InMemoryTaskRepository}
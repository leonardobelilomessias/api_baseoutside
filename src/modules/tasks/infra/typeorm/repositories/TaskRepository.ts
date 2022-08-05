
import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateTask, ITaskRepository } from "../../../repositories/ITaskRepository"

import { Task } from "../Entities/Task"



class TaskRepository implements ITaskRepository{
  private taskRepository: Repository<Task>
  constructor() {
    this.taskRepository  =  AppDataSource.getRepository(Task)
  }
  async create({ title, description, id_action }: ICreateTask): Promise<Task> {
    const newTask = this.taskRepository.create({title, description, id_action})
    await this.taskRepository.save(newTask)
    return newTask
  }
  async list(): Promise<Task[]> {
    const allTask = await this.taskRepository.find()
    return allTask
  }
  async findById({ id }: { id: any }): Promise<Task> {
    throw new Error("Method not implemented.")
  }
  async findByTitle({ title }: { title: any }): Promise<Task> {
    throw new Error("Method not implemented.")
  }


}
export { TaskRepository }

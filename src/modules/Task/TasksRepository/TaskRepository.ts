import { Repository } from "typeorm"
import { AppDataSource } from "../../../database"
import { Task } from "../Entities/Task"
import { DTOTaskRepository } from "./DTOTaskRepository"


class TaskRepository implements DTOTaskRepository{
  private taskRepository: Repository<Task>
  constructor() {
    this.taskRepository  =  AppDataSource.getRepository(Task)
  }
  async create({ title, description, id_action }): Promise<Task> {
    const newTask = this.taskRepository.create({title,description,id_action})
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
export{TaskRepository}
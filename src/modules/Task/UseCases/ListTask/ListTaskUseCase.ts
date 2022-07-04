import { Task } from "../../Entities/Task"
import { DTOTaskRepository } from "../../TasksRepository/DTOTaskRepository"
import { TaskRepository } from "../../TasksRepository/TaskRepository"

class ListTaskUseCase{
   private taskRepository: TaskRepository
  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository
  }
  async execute(): Promise<Task[]>{
    const allTask =   await this.taskRepository.list()
    return allTask
  }
}
export{ListTaskUseCase}
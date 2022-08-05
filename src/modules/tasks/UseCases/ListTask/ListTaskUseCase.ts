
import { Task } from "../../infra/typeorm/entities/Task"
import { TaskRepository } from "../../infra/typeorm/repositories/TaskRepository"


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
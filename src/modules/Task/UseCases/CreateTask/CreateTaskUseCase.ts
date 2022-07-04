import { DTOTaskRepository } from "../../TasksRepository/DTOTaskRepository"
import { InMemoryTaskRepository } from "../../TasksRepository/InMemoryTaskRepository"
import { TaskRepository } from "../../TasksRepository/TaskRepository"


class CreateTaskUseCase{
  taskRepository:DTOTaskRepository
  constructor(taskRepository:DTOTaskRepository) {
    this.taskRepository = taskRepository
  }
  async execute({ title, description, id_action }) {
    const newTask = await this.taskRepository.create({ title, description, id_action })
    return newTask
   }
  

}
export{CreateTaskUseCase}
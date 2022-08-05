import { ITaskRepository } from "../../repositories/ITaskRepository"



class CreateTaskUseCase{
  private taskRepository:ITaskRepository
  constructor(taskRepository:ITaskRepository) {
    this.taskRepository = taskRepository
  }
  async execute({ title, description, id_action }) {
    const newTask = await this.taskRepository.create({ title, description, id_action })
    return newTask
   }
  

}
export{CreateTaskUseCase}
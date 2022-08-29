import { AppError } from "../../../../../../shared/errors/AppError"
import { TaskDepartament } from "../../../../infra/typeorm/entities/TaskDepartament"
import { ITaskDepartamentRepository } from "../../../../repositories/ITaskDepartamentRepository"

class DeleteTaskDepartamentUseCase{
  private taskDepartamentRepository:ITaskDepartamentRepository
  constructor(taskDepartamentRepository:ITaskDepartamentRepository){
    this.taskDepartamentRepository = taskDepartamentRepository
  }
  async execute(id):Promise<TaskDepartament>{
    if(!id)throw new AppError("Value of task is undefined")
    const deleteTask = await this.taskDepartamentRepository.deleteTaskDepartament(id)
    return deleteTask
  }
} 
export{DeleteTaskDepartamentUseCase}
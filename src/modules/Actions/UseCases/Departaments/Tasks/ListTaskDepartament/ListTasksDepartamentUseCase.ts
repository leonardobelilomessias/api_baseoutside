import { AppError } from "../../../../../../shared/errors/AppError"
import { TaskDepartament } from "../../../../infra/typeorm/entities/TaskDepartament"
import { ITaskDepartamentRepository } from "../../../../repositories/ITaskDepartamentRepository"

class ListTasksDepartamentUseCase{
  private taskDepartamentRepository:ITaskDepartamentRepository
  constructor(taskDepartamentRepository:ITaskDepartamentRepository){
    this.taskDepartamentRepository = taskDepartamentRepository
  }
  async execute(id_departament:string):Promise<TaskDepartament[]>{
    if(!id_departament) throw new AppError("Value of departament is undefined")
    const tasksDepartament = await this.taskDepartamentRepository.listAllTaskDepartament(id_departament)
    return tasksDepartament
  }
} 
export{ListTasksDepartamentUseCase}
import { AppError } from "../../../../../../shared/errors/AppError"
import { ICreateTaskDepartament, ITaskDepartamentRepository } from "../../../../repositories/ITaskDepartamentRepository"




class CreateTaskDepartamentUseCase{
  private taskDepartamentRepository:ITaskDepartamentRepository
  constructor(taskRepository:ITaskDepartamentRepository) {
    this.taskDepartamentRepository = taskRepository
  }
  async execute({title,description,id_action,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_mission,id_departament}:ICreateTaskDepartament) {
    if(!title||!description||!id_departament||!id_action||!id_mission) throw new AppError("Some required value is undefined.")
    const newTaskDepartament = await this.taskDepartamentRepository.create({title,description,id_action,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_mission,id_departament})
    return newTaskDepartament
   }
  

}
export{CreateTaskDepartamentUseCase}
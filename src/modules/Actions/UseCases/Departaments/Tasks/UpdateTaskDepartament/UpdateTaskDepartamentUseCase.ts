import { AppError } from "../../../../../../shared/errors/AppError"
import { TaskDepartament } from "../../../../infra/typeorm/entities/TaskDepartament"
import { IEditTaskDepartament, ITaskDepartamentRepository } from "../../../../repositories/ITaskDepartamentRepository"


class UpdateTaskDepartamentUseCase{
  private taskDepartamentRepository:ITaskDepartamentRepository
  constructor(taskDepartamentRepository:ITaskDepartamentRepository){
    this.taskDepartamentRepository = taskDepartamentRepository
  }
  async execute({ id, title, description,  local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require,  id_departament }: IEditTaskDepartament):Promise<TaskDepartament>{
    if(!id||!id_departament) throw new AppError("Value task or departament is undefined")
    const updateTaskDepartement = await this.taskDepartamentRepository.editTaskDepartament({ id, title, description, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_departament })
    return updateTaskDepartement
  }
}
export{UpdateTaskDepartamentUseCase}
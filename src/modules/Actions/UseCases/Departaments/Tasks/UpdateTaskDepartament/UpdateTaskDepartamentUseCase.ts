import { AppError } from "../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputUpdateTaskDEpartamentActionDTO } from "../../../../dtos/ITasksDepartamentsActionDTOS"
import { TaskDepartament } from "../../../../infra/typeorm/entities/TaskDepartament"
import { IDepartamentRepository } from "../../../../repositories/IDepartamentRepository"
import { IEditTaskDepartament, ITaskDepartamentRepository } from "../../../../repositories/ITaskDepartamentRepository"


class UpdateTaskDepartamentUseCase{
  private taskDepartamentRepository:ITaskDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(taskDepartamentRepository:ITaskDepartamentRepository){
    this.taskDepartamentRepository = taskDepartamentRepository
    this.menagePermission =new  MenagerPermissionRespository()
  }
  async execute({ id_agent_token,id, title, description,  local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require,  id_departament }:IInputUpdateTaskDEpartamentActionDTO):Promise<TaskDepartament>{
    if(!id||!id_departament) throw new AppError("Value task or departament is undefined")
    const findTask = await this.taskDepartamentRepository.findTaskDepartamentById({id})
    if(!findTask)throw new AppError("Task departament not found.")
    const allowUpdateTaksDepartament = await this.menagePermission.confirmePermissionAction({id_action:findTask.id_action,id_agent_token})
    if(!allowUpdateTaksDepartament) throw new AppError("Agent authenticate doesn't have permission to action.")
    const updateTaskDepartement = await this.taskDepartamentRepository.editTaskDepartament({ id, title, description, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_departament })
    return updateTaskDepartement
  }
}
export{UpdateTaskDepartamentUseCase}
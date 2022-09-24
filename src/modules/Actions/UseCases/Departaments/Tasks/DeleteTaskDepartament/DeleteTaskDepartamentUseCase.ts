import { AppError } from "../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { TaskDepartament } from "../../../../infra/typeorm/entities/TaskDepartament"
import { ITaskDepartamentRepository } from "../../../../repositories/ITaskDepartamentRepository"

class DeleteTaskDepartamentUseCase{
  private taskDepartamentRepository:ITaskDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(taskDepartamentRepository:ITaskDepartamentRepository){
    this.taskDepartamentRepository = taskDepartamentRepository
    this.menagePermission = new MenagerPermissionRespository
  }
  async execute({id_agent_token,id}):Promise<TaskDepartament>{
    if(!id)throw new AppError("Value of task is undefined")
    const findTaksDepartament = await this.taskDepartamentRepository.findTaskDepartamentById({id})
    if(!findTaksDepartament) throw new AppError("Taks deparatment not found.")
    const allowDeleteTaksDepartament = await this.menagePermission.confirmePermissionAction({id_action:findTaksDepartament.id_action,id_agent_token})
    if(!allowDeleteTaksDepartament) throw new AppError("Agent authenticated doesn't have permission to action.")
    const deleteTask = await this.taskDepartamentRepository.deleteTaskDepartament(id)
    return deleteTask
  }
} 
export{DeleteTaskDepartamentUseCase}
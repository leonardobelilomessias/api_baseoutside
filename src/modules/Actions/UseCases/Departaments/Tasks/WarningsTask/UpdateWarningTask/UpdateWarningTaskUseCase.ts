import { AppError } from "../../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { ITaskDepartamentRepository } from "../../../../../repositories/ITaskDepartamentRepository"
import { IWarningsTaskRepository, IEditWarningsTaskDTO } from "../../../../../repositories/IWarningsTaskRepository"

class UpdateWarningTaskUseCase{
  private warningTaskRepository:IWarningsTaskRepository
  private taskDepartamentRepository:ITaskDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(warningTaskRepository:IWarningsTaskRepository,taskDepartamentRepository:ITaskDepartamentRepository){
    this.warningTaskRepository = warningTaskRepository
    this.taskDepartamentRepository = taskDepartamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token, id, title, content, priority, is_active, state, type }):Promise<WarningsTask>{
    if(!id)throw new AppError("Value of warning is undefined.")
    const findWarning = await this.warningTaskRepository.findById(id)
    if(typeof priority !== typeof Number())throw new AppError("Value of priority must be a number.")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of type must be a number.")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
    if(typeof is_active !== typeof Boolean()&& !!is_active)throw new AppError("Value of is_active must be a number.")
    if(!findWarning)throw new AppError("Warning not found.")
    const findTaks= await this.taskDepartamentRepository.findTaskDepartamentById({id:findWarning.id_task})
    const allowUpdateWarningTaks = await this.menagePermission.confirmePermissionAction({id_action:findTaks.id_action,id_agent_token})
    if(!allowUpdateWarningTaks)throw new AppError("Agent Authenticated doesn't have permission to action.")
    const editedWarningission = await this.warningTaskRepository.edit({ id, title, content, priority, is_active, state, type })
    return editedWarningission
  }
}
export{UpdateWarningTaskUseCase}
import { AppError } from "../../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { ITaskDepartamentRepository } from "../../../../../repositories/ITaskDepartamentRepository"
import { IWarningsTaskRepository } from "../../../../../repositories/IWarningsTaskRepository"

class DeleteWarningTaskUseCase{
  private warningsTaskRepository:IWarningsTaskRepository
  private taskDepartamentRepository:ITaskDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(warningsTaskRepository:IWarningsTaskRepository,taskDepartamentRepository:ITaskDepartamentRepository){
    this.warningsTaskRepository = warningsTaskRepository
    this.taskDepartamentRepository = taskDepartamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id,id_agent_token}){
    if(!id) throw new AppError("Value of warning is undefined.")
    const findWarningTaks = await this.warningsTaskRepository.findById(id)
    if(!findWarningTaks) throw new AppError("Warning task not found")
    const findTaks = await this.taskDepartamentRepository.findTaskDepartamentById({id:findWarningTaks.id_task})
    const allowDeleteWarningTask = await this.menagePermission.confirmePermissionAction({id_action:findTaks.id_action,id_agent_token})
    if(!allowDeleteWarningTask)throw new AppError("Agent authenticated doesn't have permission to action.")
    const deletedWarnigTask = await this.warningsTaskRepository.delete(id)
    return deletedWarnigTask
  }
} 
export{DeleteWarningTaskUseCase}
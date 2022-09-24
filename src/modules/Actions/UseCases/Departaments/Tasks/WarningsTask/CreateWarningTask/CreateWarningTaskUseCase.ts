import { AppError } from "../../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { WarningsTask } from "../../../../../infra/typeorm/entities/WarningTask"
import { ITaskDepartamentRepository } from "../../../../../repositories/ITaskDepartamentRepository"
import { IWarningsTaskRepository, ICreateWarningsTaskDTO } from "../../../../../repositories/IWarningsTaskRepository"



class CreateWarningTaskUseCase{
  private warningTaskRepository:IWarningsTaskRepository
  private taskDepartamentRespository :ITaskDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(warningTaskRepository:IWarningsTaskRepository,taskDepartamentRespository :ITaskDepartamentRepository){
    this.warningTaskRepository = warningTaskRepository
    this.taskDepartamentRespository = taskDepartamentRespository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token, id_task, id_creator, title, content, priority, is_active, state, type }):Promise<WarningsTask>{
    if(!id_task||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    if(id_agent_token !== id_creator)throw new AppError("Id creator is diferente of agent authenticated")
    const findTaskDepartament = await this.taskDepartamentRespository.findTaskDepartamentById({id:id_task})
    if(!findTaskDepartament) throw new AppError("Taks departament not fund")
    const allowCreateWarningTask = await this.menagePermission.confirmePermissionAction({id_action:findTaskDepartament.id_action,id_agent_token})
    if(!allowCreateWarningTask) throw new AppError("Agent authenticated doesn't have permission to action.")
    const createWarning = await this.warningTaskRepository.create({ id_task, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningTaskUseCase}
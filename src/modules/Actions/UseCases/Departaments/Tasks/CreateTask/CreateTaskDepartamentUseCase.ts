import { AppError } from "../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputCreateTaskDEpartamentActionDTO } from "../../../../dtos/ITasksDepartamentsActionDTOS"
import { IDepartamentRepository } from "../../../../repositories/IDepartamentRepository"
import { ICreateTaskDepartament, ITaskDepartamentRepository } from "../../../../repositories/ITaskDepartamentRepository"

class CreateTaskDepartamentUseCase{
  private taskDepartamentRepository:ITaskDepartamentRepository
  private menagePermision:MenagerPermissionRespository
  private departamentRepository:IDepartamentRepository
  constructor(taskRepository:ITaskDepartamentRepository,departamentRepository:IDepartamentRepository) {
    this.taskDepartamentRepository = taskRepository
    this.menagePermision = new MenagerPermissionRespository()
    this.departamentRepository = departamentRepository
  }
  async execute({id_agent_token,title,description,id_action,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_mission,id_departament}:IInputCreateTaskDEpartamentActionDTO) {
    if(!title||!description||!id_departament||!id_action||!id_mission) throw new AppError("Some required value is undefined.")
    const findDepartament = await this.departamentRepository.findDepartamentById({id_departament})
    if(!findDepartament) throw new AppError("Departament  not found.")
    const allowCreateTask = await this.menagePermision.confirmePermissionAction({id_action,id_agent_token})
    if(!allowCreateTask)throw new AppError("Agent authenticade dowsn't have permission to action.")
    const newTaskDepartament = await this.taskDepartamentRepository.create({title,description,id_action,local,is_active,state,agents_necessary,agents_limit,priority,date_limit_subscribe,is_require_skill,skill_require,id_mission,id_departament})
    return newTaskDepartament
   }
  

}
export{CreateTaskDepartamentUseCase}
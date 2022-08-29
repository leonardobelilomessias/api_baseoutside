import { Request, Response } from "express"
import { TaskDepartament } from "../../../../infra/typeorm/entities/TaskDepartament"
import { UpdateTaskDepartamentUseCase } from "./UpdateTaskDepartamentUseCase"

class UpdateTaskDepartamentController{
  private updateTaskDepartamentUseCase:UpdateTaskDepartamentUseCase
  constructor(updateTaskDepartamentUseCase:UpdateTaskDepartamentUseCase){
    this.updateTaskDepartamentUseCase = updateTaskDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response>{
    const { id, title, description, local, is_active,
       state, agents_necessary, agents_limit, priority, 
       date_limit_subscribe, is_require_skill, skill_require, id_departament } = request.body
    const updateTaskDepartement = await this.updateTaskDepartamentUseCase.execute({ id, title, description, local, is_active, state, agents_necessary, agents_limit,
      priority, date_limit_subscribe, is_require_skill,
       skill_require, id_departament })
    return response.status(200).json(updateTaskDepartement)
  }
}
export{UpdateTaskDepartamentController}
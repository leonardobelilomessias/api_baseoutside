import { Request, Response } from "express"
import { CreateTaskDepartamentUseCase } from "./CreateTaskDepartamentUseCase"

class CreateTaskDepartamentController{
  createTaskDepartamentUseCase: CreateTaskDepartamentUseCase
  constructor(createTaskDepartamentUseCase: CreateTaskDepartamentUseCase) { 
    this.createTaskDepartamentUseCase = createTaskDepartamentUseCase
  }
  async handle(request:Request,response:Response):Promise<Response> {
  
    const { title, description, id_action, local, is_active, 
    state, agents_necessary, agents_limit, priority, date_limit_subscribe,
     is_require_skill, skill_require, id_mission, id_departament } = request.body
     const id_agent_token = request.user?.id
    const createTaskDepartament = await this.createTaskDepartamentUseCase.execute(
      {id_agent_token, title, description, id_action, 
        local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require,
         id_mission, id_departament }
    )
    return response.status(200).json(createTaskDepartament)
  }
}
export {CreateTaskDepartamentController}
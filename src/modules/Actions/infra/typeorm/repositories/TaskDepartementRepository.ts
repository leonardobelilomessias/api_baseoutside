import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateTaskDepartament, IEditTaskDepartament, ITaskDepartamentRepository } from "../../../repositories/ITaskDepartamentRepository"
import { TaskDepartament } from "../entities/TaskDepartament"




class TaskDepartamentRepository implements ITaskDepartamentRepository{
  private taskDepartamentRepository: Repository<TaskDepartament>
  constructor() {
    this.taskDepartamentRepository  =  AppDataSource.getRepository(TaskDepartament)
  }
  async create({ title, description, id_action, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_mission, id_departament }: ICreateTaskDepartament): Promise<TaskDepartament> { 
    try {
      const newTaskDepartament = new TaskDepartament()
      Object.assign(newTaskDepartament,{ title, description, id_action, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_mission, id_departament })
      const taskDepartament = await this.taskDepartamentRepository.save(newTaskDepartament)
      return taskDepartament
    } catch {
      throw new AppError("Some value is incorrect")
    }
  }
  findTaskDepartamentById({ id }: { id: any }): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  findTaskDepartamentByTitle({ title }: { title: any }): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  listAllTaskDepartament(id_departament: string): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  listTasksDepartamentByAction(id_action: string): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  listTasksDepartamentByLocal(local: string): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  listTasksDepartamentByMisssion(id_mission: string): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  editTaskDepartament({ id, id_departament }: { id: any; id_departament: any }): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  deleteTaskDepartament({ id, title, description, id_action, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_mission, id_departament }: IEditTaskDepartament): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }



}
export { TaskDepartamentRepository }

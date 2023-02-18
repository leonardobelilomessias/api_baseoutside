import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IOutputTaskDepartamentDTO } from "../../../dtos/ITasksDepartamentsActionDTOS"
import { ICreateTaskDepartament, IEditTaskDepartament, ITaskDepartamentRepository } from "../../../repositories/ITaskDepartamentRepository"
import { TaskDepartament } from "../entities/TaskDepartament"




class TaskDepartamentRepository implements ITaskDepartamentRepository{
  private taskDepartamentRepository: Repository<TaskDepartament>
  constructor() {
    this.taskDepartamentRepository  =  AppDataSource.getRepository(TaskDepartament)
  }
  async create({ title, description, id_action, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_mission, id_departament }: ICreateTaskDepartament): Promise<IOutputTaskDepartamentDTO> { 
    try {
      const newTaskDepartament = new TaskDepartament()
      Object.assign(newTaskDepartament,{ title, description, id_action, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_mission, id_departament })
      const taskDepartament = await this.taskDepartamentRepository.save(newTaskDepartament)
      return taskDepartament
    } catch {
      throw new AppError("Some value is incorrect")
    }
  }
  async findTaskDepartamentById({ id }: { id: any }): Promise<IOutputTaskDepartamentDTO> {
    const findTaskDepartament = await this.taskDepartamentRepository.findOne({where:{id:id}})
    return findTaskDepartament
  }
  findTaskDepartamentByTitle({ title }: { title: any }): Promise<IOutputTaskDepartamentDTO> {
    throw new Error("Method not implemented.")
  }
  async listAllTaskDepartament(id_departament: string): Promise<IOutputTaskDepartamentDTO[]> {
    const tasksDapartament = await this.taskDepartamentRepository.findBy({id_departament})
    return tasksDapartament 
  }
  listTasksDepartamentByAction(id_action: string): Promise<IOutputTaskDepartamentDTO[]> {
    throw new Error("Method not implemented.")
  }
  listTasksDepartamentByLocal(local: string): Promise<IOutputTaskDepartamentDTO[]> {
    throw new Error("Method not implemented.")
  }
  listTasksDepartamentByMisssion(id_mission: string): Promise<IOutputTaskDepartamentDTO[]> {
    throw new Error("Method not implemented.")
  }
  async editTaskDepartament({ id, title, description, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require,  id_departament }: IEditTaskDepartament): Promise<IOutputTaskDepartamentDTO> {
    const findTaksDepartament = await this.taskDepartamentRepository.findOneBy({id})
    if(!findTaksDepartament)throw new AppError("Task not found")
    Object.assign(findTaksDepartament,{ id, title, description, local, is_active, 
      state, agents_necessary, agents_limit, priority, 
      date_limit_subscribe, is_require_skill, skill_require,  id_departament })
    const  updateTaskDepartament = await this.taskDepartamentRepository.save(findTaksDepartament)
    return updateTaskDepartament
  }
 async  deleteTaskDepartament(id): Promise<IOutputTaskDepartamentDTO> {
    const findTaksDepartament = await this.taskDepartamentRepository.findOneBy({id})
    if(!findTaksDepartament) throw new AppError("Not found task departament.")
    await this.taskDepartamentRepository.delete({id:findTaksDepartament.id})
    return findTaksDepartament
  }



}
export { TaskDepartamentRepository }

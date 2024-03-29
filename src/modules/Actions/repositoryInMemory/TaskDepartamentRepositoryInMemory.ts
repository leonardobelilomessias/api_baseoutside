import { TaskDepartament } from "../infra/typeorm/entities/TaskDepartament"
import { ICreateTaskDepartament, IEditTaskDepartament, ITaskDepartamentRepository } from "../repositories/ITaskDepartamentRepository"





class TaskDepartamentRepositoryInMemory implements ITaskDepartamentRepository{
  private taskDepartamentRepositoryInMemory:TaskDepartament[]
  constructor(){
    this.taskDepartamentRepositoryInMemory =[]
  }
  async create({ title, description, id_action, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_mission, id_departament }: ICreateTaskDepartament): Promise<TaskDepartament> {
    const newTaskDepartament = new TaskDepartament()
    Object.assign(newTaskDepartament,{ title, description, id_action, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require, id_mission, id_departament })
    await this.taskDepartamentRepositoryInMemory.push(newTaskDepartament)
    return newTaskDepartament
  }
  findTaskDepartamentById({ id }: { id: any }): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
  findTaskDepartamentByTitle({ title }: { title: any }): Promise<TaskDepartament> {
    throw new Error("Method not implemented.")
  }
 async  listAllTaskDepartament(id_departament: string): Promise<TaskDepartament[]> {
    return this.taskDepartamentRepositoryInMemory
  }
  listTasksDepartamentByAction(id_action: string): Promise<TaskDepartament[]> {
    throw new Error("Method not implemented.")
  }
  listTasksDepartamentByLocal(local: string): Promise<TaskDepartament[]> {
    throw new Error("Method not implemented.")
  }
  listTasksDepartamentByMisssion(id_mission: string): Promise<TaskDepartament[]> {
    throw new Error("Method not implemented.")
  }
  async editTaskDepartament({ id, title, description, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require,id_departament }: IEditTaskDepartament): Promise<TaskDepartament> {
    const findTask = await this.taskDepartamentRepositoryInMemory.find(taskDepartament =>(taskDepartament.id ===id && taskDepartament.id_departament ===id_departament))
    Object.assign(findTask,{ id, title, description, local, is_active, state, agents_necessary, agents_limit, priority, date_limit_subscribe, is_require_skill, skill_require,id_departament })
    return findTask
  }
  async deleteTaskDepartament(id): Promise<TaskDepartament> {
    const findIndexTaks = await this.taskDepartamentRepositoryInMemory.findIndex( task=> (task.id ===id))
    const deleteTaskDepartament = this.taskDepartamentRepositoryInMemory.slice(findIndexTaks,1)
    return deleteTaskDepartament[0]
  }



}
export{TaskDepartamentRepositoryInMemory}
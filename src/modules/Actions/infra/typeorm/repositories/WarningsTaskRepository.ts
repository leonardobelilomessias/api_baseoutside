import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateWarningsTaskDTO, IEditWarningsTaskDTO, IWarningsTaskRepository } from "../../../repositories/IWarningsTaskRepository"
import { WarningsTask } from "../entities/WarningTask"

class WarningTaskRepository implements IWarningsTaskRepository{
  private warningsTaskRepository:Repository<WarningsTask>
  constructor(){
    this.warningsTaskRepository = AppDataSource.getRepository("warnings_tasks")
  }
  async findById(id: string): Promise<WarningsTask> {
    const findwarning = await this.warningsTaskRepository.findOne({where:{id}})
    return findwarning
  }
  async create({ id_task, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsTaskDTO): Promise<WarningsTask> {
    const newWarning = new WarningsTask()
    Object.assign(newWarning,{ id_task, id_creator, title, content, priority, is_active, state, type })
    const createdWarning = await this.warningsTaskRepository.save(newWarning)
    return createdWarning
  }
  async listByIdTask(id_task: string): Promise<WarningsTask[]> {
    const listWarningsTask = await this.warningsTaskRepository.find({where:{id_task}})
    return listWarningsTask
  }
  async listByStatus({state,id_task}): Promise<WarningsTask[]> {
    const findWarning = await this.warningsTaskRepository.find({where:{state,id_task}})
    return findWarning
  }
  async listByPriority({priority,id_task}): Promise<WarningsTask[]> {
    const findWarning = await this.warningsTaskRepository.find({where:{priority,id_task}})
    return findWarning
  }
  async listByType({type,id_task}): Promise<WarningsTask[]> {
    const findWarning = await this.warningsTaskRepository.find({where:{type,id_task}})
    return findWarning
  }
  async edit({ id, title, content, priority, is_active, state, type }: IEditWarningsTaskDTO): Promise<WarningsTask> {
    const findWarning = await this.warningsTaskRepository.findOneBy({id})
    Object.assign(findWarning,{title, content, priority, is_active, state, type })
    const editedWarningTask = await this.warningsTaskRepository.save(findWarning)
    return editedWarningTask
  }
  async delete(id:string):Promise<WarningsTask> {
    const findwarning = await this.warningsTaskRepository.findOneBy({id})
    if(!findwarning) throw new AppError("Warning not found")
    const deletedWarnigTask = await this.warningsTaskRepository.delete(findwarning.id)
    return findwarning
  }
}
export{WarningTaskRepository}
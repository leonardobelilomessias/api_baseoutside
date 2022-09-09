import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateWarningsActionDTO, IEditWarningsActionDTO, IWarningsActionRepository } from "../../../repositories/IWarningsActionRepository"
import { WarningsAction } from "../entities/WarningAction"

class WarningActionRepository implements IWarningsActionRepository{
  private warningsActionRepository:Repository<WarningsAction>
  constructor(){
    this.warningsActionRepository = AppDataSource.getRepository("warnings_actions")
  }
  async findById(id: string): Promise<WarningsAction> {
    const findwarning = await this.warningsActionRepository.findOne({where:{id}})
    return findwarning
  }
  async create({ id_action, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsActionDTO): Promise<WarningsAction> {
    const newWarning = new WarningsAction()
    Object.assign(newWarning,{ id_action, id_creator, title, content, priority, is_active, state, type })
    const createdWarning = await this.warningsActionRepository.save(newWarning)
    return createdWarning
  }
  async listByIdAction(id_action: string): Promise<WarningsAction[]> {
    const listWarningsAction = await this.warningsActionRepository.find({where:{id_action}})
    return listWarningsAction
  }
  async listByStatus({state,id_action}): Promise<WarningsAction[]> {
    const findWarning = await this.warningsActionRepository.find({where:{state,id_action}})
    return findWarning
  }
  async listByPriority({priority,id_action}): Promise<WarningsAction[]> {
    const findWarning = await this.warningsActionRepository.find({where:{priority,id_action}})
    return findWarning
  }
  async listByType({type,id_action}): Promise<WarningsAction[]> {
    const findWarning = await this.warningsActionRepository.find({where:{type,id_action}})
    return findWarning
  }
  async edit({ id, title, content, priority, is_active, state, type }: IEditWarningsActionDTO): Promise<WarningsAction> {
    const findWarning = await this.warningsActionRepository.findOneBy({id})
    Object.assign(findWarning,{title, content, priority, is_active, state, type })
    const editedWarningAction = await this.warningsActionRepository.save(findWarning)
    return editedWarningAction
  }
  async delete(id:string):Promise<WarningsAction> {
    const findwarning = await this.warningsActionRepository.findOneBy({id})
    if(!findwarning) throw new AppError("Warning not found")
    const deletedWarnigAction = await this.warningsActionRepository.delete(findwarning.id)
    return findwarning
  }
}
export{WarningActionRepository}
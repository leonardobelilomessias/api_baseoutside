import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateWarningsMissionDTO, IEditWarningsMissionDTO, IWarningsMissionRepository } from "../../../repositories/IWarningsMissionRepository"
import { WarningsMission } from "../entities/WarningMission"

class WarningMissionRepository implements IWarningsMissionRepository{
  private warningsMissionRepository:Repository<WarningsMission>
  constructor(){
    this.warningsMissionRepository = AppDataSource.getRepository("warnings_missions")
  }
  async findById(id: string): Promise<WarningsMission> {
    const findwarning = await this.warningsMissionRepository.findOne({where:{id}})
    return findwarning
  }
  async create({ id_mission, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsMissionDTO): Promise<WarningsMission> {
    const newWarning = new WarningsMission()
    Object.assign(newWarning,{ id_mission, id_creator, title, content, priority, is_active, state, type })
    const createdWarning = await this.warningsMissionRepository.save(newWarning)
    return createdWarning
  }
  async listByIdMission(id_mission: string): Promise<WarningsMission[]> {
    const listWarningsMission = await this.warningsMissionRepository.find({where:{id_mission}})

    return listWarningsMission
  }
  listByStatus(state: number): Promise<WarningsMission[]> {
    throw new Error("Method not implemented.")
  }
  listByPriority(priority: string): Promise<WarningsMission[]> {
    throw new Error("Method not implemented.")
  }
  listByType(type: number): Promise<WarningsMission[]> {
    throw new Error("Method not implemented.")
  }
  async edit({ id, title, content, priority, is_active, state, type }: IEditWarningsMissionDTO): Promise<WarningsMission> {
    const findWarning = await this.warningsMissionRepository.findOneBy({id})
    Object.assign(findWarning,{title, content, priority, is_active, state, type })
    const editedWarningmission = await this.warningsMissionRepository.save(findWarning)
    return editedWarningmission
  }
  delete() {
    throw new Error("Method not implemented.")
  }
}
export{WarningMissionRepository}
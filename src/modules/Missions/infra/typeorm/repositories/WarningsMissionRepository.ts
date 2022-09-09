import { Repository } from "typeorm"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateWarningsMissionDTO, IEditWarningsMissionDTO, IWarningsMissionRepository } from "../../../repositories/IWarningsMissionRepository"
import { WarningsMission } from "../entities/WarningMission"

class WarningMissionRepository implements IWarningsMissionRepository{
  private warningsMissionRepository:Repository<WarningsMission>
  constructor(){
    this.warningsMissionRepository = AppDataSource.getRepository(WarningsMission)
  }
  async create({ id_mission, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsMissionDTO): Promise<WarningsMission> {
    const newWarning = new WarningsMission()
    Object.assign(newWarning,{ id_mission, id_creator, title, content, priority, is_active, state, type })
    const createdWarning = await this.warningsMissionRepository.create(newWarning)
    return createdWarning
  }
  listByIdMission(id_mission: string): Promise<WarningsMission[]> {
    throw new Error("Method not implemented.")
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
  edit({ id, title, content, priority, is_active, state, type }: IEditWarningsMissionDTO): Promise<WarningsMission> {
    throw new Error("Method not implemented.")
  }
  delete() {
    throw new Error("Method not implemented.")
  }
}
export{WarningMissionRepository}
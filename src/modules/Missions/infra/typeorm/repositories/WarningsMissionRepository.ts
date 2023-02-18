import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { ICreateWarningsMissionDTOS, IOutputWarningsMissionDTOS } from "../../../dtos/IWarningsMissionDTOS"
import {IEditWarningsMissionDTO, IWarningsMissionRepository } from "../../../repositories/IWarningsMissionRepository"
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
  async create({ id_mission, id_creator, title, content, priority, is_active, state, type }: ICreateWarningsMissionDTOS): Promise<IOutputWarningsMissionDTOS> {
    const newWarning = new WarningsMission()
    Object.assign(newWarning,{ id_mission, id_creator, title, content, priority, is_active, state, type })
    const createdWarning = await this.warningsMissionRepository.save(newWarning)
    return createdWarning
  }
  async listByIdMission(id_mission: string): Promise<IOutputWarningsMissionDTOS[]> {
    const listWarningsMission = await this.warningsMissionRepository.find({where:{id_mission}})
    return listWarningsMission
  }
  async listByStatus({state,id_mission}): Promise<IOutputWarningsMissionDTOS[]> {
    const findWarning = await this.warningsMissionRepository.find({where:{state,id_mission}})
    return findWarning
  }
  async listByPriority({priority,id_mission}): Promise<IOutputWarningsMissionDTOS[]> {
    const findWarning = await this.warningsMissionRepository.find({where:{priority,id_mission}})
    return findWarning
  }
  async listByType({type,id_mission}): Promise<IOutputWarningsMissionDTOS[]> {
    const findWarning = await this.warningsMissionRepository.find({where:{type,id_mission}})
    return findWarning
  }
  async edit({ id, title, content, priority, is_active, state, type }: IEditWarningsMissionDTO): Promise<IOutputWarningsMissionDTOS> {
    const findWarning = await this.warningsMissionRepository.findOneBy({id})
    Object.assign(findWarning,{title, content, priority, is_active, state, type })
    const editedWarningmission = await this.warningsMissionRepository.save(findWarning)
    return editedWarningmission
  }
  async delete(id:string):Promise<IOutputWarningsMissionDTOS> {
    const findwarning = await this.warningsMissionRepository.findOneBy({id})
    if(!findwarning) throw new AppError("Warning not found")
    const deletedWarnigMission = await this.warningsMissionRepository.delete(findwarning.id)
    return findwarning
  }
}
export{WarningMissionRepository}
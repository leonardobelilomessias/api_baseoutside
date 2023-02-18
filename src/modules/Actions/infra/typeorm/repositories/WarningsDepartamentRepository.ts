import { Repository } from "typeorm"
import { AppError } from "../../../../../shared/errors/AppError"
import { AppDataSource } from "../../../../../shared/infra/typeorm"
import { IOutputWarningDepartamentDTO } from "../../../dtos/IWarningDepartamentDTOS"
import {  IEditWarningsDepartamentDTO, IWarningsDepartamentRepository } from "../../../repositories/IWarningsDepartamentRepository"
import { WarningsDepartament } from "../entities/WarningDepartament"

class WarningDepartamentRepository implements IWarningsDepartamentRepository{
  private warningsDepartamentRepository:Repository<WarningsDepartament>
  constructor(){
    this.warningsDepartamentRepository = AppDataSource.getRepository("warnings_departaments")
  }
  async findById(id: string): Promise<WarningsDepartament> {
    const findwarning = await this.warningsDepartamentRepository.findOne({where:{id}})
    return findwarning
  }
  async create({ id_departament, id_creator, title, content, priority, is_active, state, type }: IOutputWarningDepartamentDTO): Promise<IOutputWarningDepartamentDTO> {
    const newWarning = new WarningsDepartament()
    Object.assign(newWarning,{ id_departament, id_creator, title, content, priority, is_active, state, type })
    const createdWarning = await this.warningsDepartamentRepository.save(newWarning)
    return createdWarning
  }
  async listByIdDepartament(id_departament: string): Promise<IOutputWarningDepartamentDTO[]> {
    const listWarningsDepartament = await this.warningsDepartamentRepository.find({where:{id_departament}})
    return listWarningsDepartament
  }
  async listByStatus({state,id_departament}): Promise<IOutputWarningDepartamentDTO[]> {
    const findWarning = await this.warningsDepartamentRepository.find({where:{state,id_departament}})
    return findWarning
  }
  async listByPriority({priority,id_departament}): Promise<IOutputWarningDepartamentDTO[]> {
    const findWarning = await this.warningsDepartamentRepository.find({where:{priority,id_departament}})
    return findWarning
  }
  async listByType({type,id_departament}): Promise<IOutputWarningDepartamentDTO[]> {
    const findWarning = await this.warningsDepartamentRepository.find({where:{type,id_departament}})
    return findWarning
  }
  async edit({ id, title, content, priority, is_active, state, type }: IEditWarningsDepartamentDTO): Promise<IOutputWarningDepartamentDTO> {
    const findWarning = await this.warningsDepartamentRepository.findOneBy({id})
    Object.assign(findWarning,{title, content, priority, is_active, state, type })
    const editedWarningDepartament = await this.warningsDepartamentRepository.save(findWarning)
    return editedWarningDepartament
  }
  async delete(id:string):Promise<WarningsDepartament> {
    const findwarning = await this.warningsDepartamentRepository.findOneBy({id})
    if(!findwarning) throw new AppError("Warning not found")
    const deletedWarnigDepartament = await this.warningsDepartamentRepository.delete(findwarning.id)
    return findwarning
  }
}
export{WarningDepartamentRepository}
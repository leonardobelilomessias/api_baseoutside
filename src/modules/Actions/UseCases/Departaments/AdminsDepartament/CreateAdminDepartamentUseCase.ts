import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IAdminDepartamentRepository } from "../../../repositories/IAdminDepartamentRepository"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class CreateAdminDepartamentUseCase{
  private adminDepartamentRepository:IAdminDepartamentRepository
  private departametRepository :IDepartamentRepository
  private menagePermissionMission:MenagerPermissionRespository
  constructor(adminDepartamentRepository:IAdminDepartamentRepository,  departametRepository :IDepartamentRepository){
    this.adminDepartamentRepository = adminDepartamentRepository
    this.departametRepository = departametRepository
    this.menagePermissionMission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_agent,id_departament,type}){
    if(!id_agent||!id_departament||!type) throw new AppError("Some required value is undefined.")
    const findAdminDepartament  = await this.departametRepository.findDepartamentById({id_departament})
    if(!findAdminDepartament) throw new AppError("Departament not found.")
    const allowCreateAdminDepartament = await this.menagePermissionMission.confirmePermissionAction({id_agent_token,id_action:findAdminDepartament.id_action})
    if(!allowCreateAdminDepartament) throw new AppError("Agent authenticated haven't permission to action.")
    const createAdminDepartament = this.adminDepartamentRepository.createAdminDepartament({id_agent,id_departament,type})
    return createAdminDepartament
  }
}
export {CreateAdminDepartamentUseCase}
import { AppError } from "../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IDepartamentRepository } from "../../../../repositories/IDepartamentRepository"
import { IWarningsDepartamentRepository } from "../../../../repositories/IWarningsDepartamentRepository"



class DeleteWarningDepartamentUseCase{
  private warningsDepartamentRepository:IWarningsDepartamentRepository
  private departamentRepository:IDepartamentRepository
  private menagePermission: MenagerPermissionRespository
  constructor(warningsDepartamentRepository:IWarningsDepartamentRepository,departamentRepository:IDepartamentRepository){
    this.warningsDepartamentRepository = warningsDepartamentRepository
    this.departamentRepository = departamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id,id_agent_token}):Promise<WarningsDepartament>{
    if(!id) throw new AppError("Value of warning is undefined.")
    const findWarningDepartament = await this.warningsDepartamentRepository.findById(id)
    if(!findWarningDepartament)throw new AppError("Warning not found")
    const findDepartament = await this.departamentRepository.findDepartamentById({id_departament:findWarningDepartament.id_departament})
    const allowDeleteDepartament = await this.menagePermission.confirmePermissionAction({id_action:findDepartament.id_action,id_agent_token})
    if(!allowDeleteDepartament)throw new AppError("Agent authenticate doesn't have permission to action. ")
    const deletedWarnigDepartament = await this.warningsDepartamentRepository.delete(id)
    return deletedWarnigDepartament
  }
} 
export{DeleteWarningDepartamentUseCase}
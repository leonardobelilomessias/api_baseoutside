import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { InputDeleteDepartamentActionDTO, IOutputDeleteDepartamentActionDTO } from "../../../dtos/IDEpartamentActionDTOS"
import { Departament } from "../../../infra/typeorm/entities/Departament"
import { IDepartamentRepository } from "../../../repositories/IDepartamentRepository"

class DeleteDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository  = departamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id,id_agent_token}:InputDeleteDepartamentActionDTO):Promise<IOutputDeleteDepartamentActionDTO>{
    if(!id) throw new AppError("Value of id departament is undefined")
    const findDepartamentAction = await this.departamentRepository.findDepartamentById({id_departament:id})
    if(!findDepartamentAction)throw new AppError("Departament not found.")
    const allowDeleteDepartament = await this.menagePermission.confirmePermissionAction({id_action:findDepartamentAction.id_action,id_agent_token})
    if(!allowDeleteDepartament) throw new AppError("Agent authencated doesn't have permission to action.")
    const deleteDepartament = await this.departamentRepository.delete(id)
    return deleteDepartament
  }
}
export{DeleteDepartamentUseCase}
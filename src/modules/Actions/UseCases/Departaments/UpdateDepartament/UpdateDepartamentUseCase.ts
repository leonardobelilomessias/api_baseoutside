import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputUpdateDepartamentActionDTO, IOutputUpdateDepartamentActionDTO } from "../../../dtos/IDEpartamentActionDTOS"
import { Departament } from "../../../infra/typeorm/entities/Departament"
import { IDepartamentRepository, IEditDepartement } from "../../../repositories/IDepartamentRepository"

class UpdateDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
    this.menagePermission = new  MenagerPermissionRespository()
  }
  async execute({id_agent_token,id,name,description,agents_limit,agents_necessary}:IInputUpdateDepartamentActionDTO):Promise<IOutputUpdateDepartamentActionDTO>{
    if(!id) throw new AppError("Value of departament is undefined.")
    const findDepartament = await this.departamentRepository.findDepartamentById({id_departament:id})
    if(!findDepartament) throw new AppError("Departament not found")
    const allowEditDepartament = await this.menagePermission.confirmePermissionAction({id_action:findDepartament.id_action,id_agent_token})
    if(!allowEditDepartament) throw new AppError("AgentAuthenticated doesen't have permission to action.")
    const updateDepartament = this.departamentRepository.edit({id,name,description,agents_limit,agents_necessary})
    return updateDepartament
  }
}
export{UpdateDepartamentUseCase}
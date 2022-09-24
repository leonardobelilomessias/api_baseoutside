import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputCreateDepartamentActionDTO, IOutputCreateDepartamentActionDTO } from "../../../dtos/IDEpartamentActionDTOS"
import { Departament } from "../../../infra/typeorm/entities/Departament"
import { IDepartamentRepository} from "../../../repositories/IDepartamentRepository"

class CreateDepartamentUseCase{
  private departamentRepository:IDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(departamentRepository:IDepartamentRepository){
    this.departamentRepository = departamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id_action,name,description,agents_limit,agents_necessary}:IInputCreateDepartamentActionDTO):Promise<IOutputCreateDepartamentActionDTO>{
    if(!id_action||!name||!description) throw new AppError("Some require value is undefined.")
    const allowCreateDepartament = await this.menagePermission.confirmePermissionAction({id_agent_token,id_action})
    if(!allowCreateDepartament) throw new AppError("Agent authenticated haven't permission to action.")
    const createDepartament = await this.departamentRepository.create({id_action,name,description,agents_limit,agents_necessary})
    return createDepartament
  }
}
export{CreateDepartamentUseCase}
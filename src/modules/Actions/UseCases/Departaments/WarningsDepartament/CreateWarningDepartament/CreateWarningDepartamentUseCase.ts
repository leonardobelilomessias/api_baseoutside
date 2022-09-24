import { AppError } from "../../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputCreateWarningDEpartamentActionDTO, IOutputCreateWarningDEpartamentActionDTO } from "../../../../dtos/IWarningDepartamentActionDTOS"
import { WarningsDepartament } from "../../../../infra/typeorm/entities/WarningDepartament"
import { IDepartamentRepository } from "../../../../repositories/IDepartamentRepository"
import { IWarningsDepartamentRepository} from "../../../../repositories/IWarningsDepartamentRepository"


class CreateWarningDepartamentUseCase{
  private warningDepartamentRepository:IWarningsDepartamentRepository
  private departamentRepository:IDepartamentRepository
  private menagePermission:MenagerPermissionRespository
  constructor(warningDepartamentRepository:IWarningsDepartamentRepository,departamentRepository:IDepartamentRepository){
    this.warningDepartamentRepository = warningDepartamentRepository
    this.departamentRepository = departamentRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token, id_departament, id_creator, title, content, priority, is_active, state, type }: IInputCreateWarningDEpartamentActionDTO):Promise<IOutputCreateWarningDEpartamentActionDTO>{
    if(!id_departament||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    if(id_creator !== id_agent_token) throw new AppError("Id of creator is diferend of id token sent.")
    const findDepartament = await this.departamentRepository.findDepartamentById({id_departament})
    if(!findDepartament) throw new AppError("Departament not found")
    const allowCreateWarning = await this.menagePermission.confirmePermissionAction({id_action:findDepartament.id_action,id_agent_token})
    if(!allowCreateWarning)throw new AppError("Agent doesn't have permission to this action.")
    const createWarning = await this.warningDepartamentRepository.create({ id_departament, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningDepartamentUseCase}
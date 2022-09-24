import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputUpdateWarningActionDTO, IOutputUpdateWarningActionDTO } from "../../../dtos/IWarningsActionsDTOS"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository, IEditWarningsActionDTO } from "../../../repositories/IWarningsActionRepository"

class UpdateWarningActionUseCase{
  private warningActionRepository:IWarningsActionRepository
  private menagePermission:MenagerPermissionRespository
  constructor(warningActionRepository:IWarningsActionRepository){
    this.warningActionRepository = warningActionRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token,id, title, content, priority, is_active, state, type }: IInputUpdateWarningActionDTO):Promise<IOutputUpdateWarningActionDTO>{
    if(!id)throw new AppError("Value of warning is undefined.")
    const findWarning = await this.warningActionRepository.findById(id)
    if(typeof priority !== typeof Number())throw new AppError("Value of priority must be a number.")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of type must be a number.")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
    if(typeof is_active !== typeof Boolean()&& !!is_active)throw new AppError("Value of is_active must be a number.")
    if(!findWarning)throw new AppError("Warning not found.")
    const allowUpdateWarning = await this.menagePermission.confirmePermissionAction({id_action:findWarning.id_action,id_agent_token})
    if(!allowUpdateWarning) throw new AppError("Agent Authenticate dont have permission to execute action.")
    const editedWarningission = await this.warningActionRepository.edit({ id, title, content, priority, is_active, state, type })
    return editedWarningission
  }
}
export{UpdateWarningActionUseCase}
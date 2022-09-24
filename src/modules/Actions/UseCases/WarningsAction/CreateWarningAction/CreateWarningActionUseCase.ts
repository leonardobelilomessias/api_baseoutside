import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputCreateWarningActionDTO, IOutputCreateWarningActionDTO } from "../../../dtos/IWarningsActionsDTOS"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository, ICreateWarningsActionDTO } from "../../../repositories/IWarningsActionRepository"


class CreateWarningActionUseCase{
  private warningActionRepository:IWarningsActionRepository
  private menagePermission:MenagerPermissionRespository
  constructor(warningActionRepository:IWarningsActionRepository){
    this.warningActionRepository = warningActionRepository
    this.menagePermission = new MenagerPermissionRespository()
  }
  async execute({id_agent_token, id_action, id_creator, title, content, priority, is_active, state, type }: IInputCreateWarningActionDTO):Promise<IOutputCreateWarningActionDTO>{
    if(!id_action||!id_creator||!title||!content) throw new AppError("Some required Vale is undefined.")
    const allowCreateWarning = await this.menagePermission.confirmePermissionAction({id_agent_token,id_action})
    if(!allowCreateWarning) throw new AppError("Agent authenticate haven'nt permission to action.")
    const createWarning = await this.warningActionRepository.create({ id_action, id_creator, title, content, priority, is_active, state, type })
    return createWarning
  }
}
export{CreateWarningActionUseCase}
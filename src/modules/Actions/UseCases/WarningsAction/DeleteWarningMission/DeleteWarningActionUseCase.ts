import { AppError } from "../../../../../shared/errors/AppError"
import { MenagerPermissionRespository } from "../../../../Missions/infra/typeorm/repositories/MenagerPermissionRepository"
import { IInputDeleteWarnigActionDTO, IOutputDeleteWarnigActionDTO } from "../../../dtos/IWarningsActionsDTOS"
import { IWarningsActionRepository } from "../../../repositories/IWarningsActionRepository"


class DeleteWarningActionUseCase{
  private warningsActionRepository:IWarningsActionRepository
  private menagePerAction:MenagerPermissionRespository
  constructor(warningsActionRepository:IWarningsActionRepository){
    this.warningsActionRepository = warningsActionRepository
    this.menagePerAction = new MenagerPermissionRespository()
  }
  async execute({id,id_agent_token}:IInputDeleteWarnigActionDTO):Promise<IOutputDeleteWarnigActionDTO>{
    if(!id) throw new AppError("Value of warning is undefined.")
    const findWarning = await this.warningsActionRepository.findById(id)
    if(!findWarning) throw new AppError("Warning not found.")
    const allowDeleteWarning = await this.menagePerAction.confirmePermissionAction({id_action:findWarning.id_action,id_agent_token})
    if(!allowDeleteWarning) throw new AppError("Agent authenticaded doesn't have perAction to execute action. ")
    const deletedWarnigAction = await this.warningsActionRepository.delete(id)
    return deletedWarnigAction
  }
} 
export{DeleteWarningActionUseCase}
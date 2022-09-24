import { AppError } from "../../../../../shared/errors/AppError"
import { IOutputGenericWarnigActionDTO } from "../../../dtos/IWarningsActionsDTOS"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository } from "../../../repositories/IWarningsActionRepository"


class ListWarningsActionUseCase{
  private warningsActionRepository:IWarningsActionRepository
  constructor(warningsActionRepository:IWarningsActionRepository){
    this.warningsActionRepository = warningsActionRepository
  }
  async execute(id_action:string):Promise<IOutputGenericWarnigActionDTO[]>{
    if(!id_action) throw new AppError("Value of Action is undefined")
    const listWarnings = this.warningsActionRepository.listByIdAction(id_action)
    return listWarnings
  }
}
export{ListWarningsActionUseCase}
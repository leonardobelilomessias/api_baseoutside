import { AppError } from "../../../../../shared/errors/AppError"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository } from "../../../repositories/IWarningsActionRepository"

class ListWarningsActionByTypeUseCase{
  private warningsActionRepository:IWarningsActionRepository
  constructor(warningsActionRepository:IWarningsActionRepository){
    this.warningsActionRepository = warningsActionRepository
  }
  async execute({type,id_action}):Promise<WarningsAction[]>{
    if(!type) throw new AppError("Value of Type is undefined")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of Type must be a number.")
    const listWarningsByType = this.warningsActionRepository.listByType({type,id_action})
    return listWarningsByType
  }
}
export{ListWarningsActionByTypeUseCase}
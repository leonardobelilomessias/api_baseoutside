import { AppError } from "../../../../../shared/errors/AppError"
import { WarningsAction } from "../../../infra/typeorm/entities/WarningAction"
import { IWarningsActionRepository } from "../../../repositories/IWarningsActionRepository"

class ListWarningsActionByStatusUseCase{
  private warningsActionRepository:IWarningsActionRepository
  constructor(warningsActionRepository:IWarningsActionRepository){
    this.warningsActionRepository = warningsActionRepository
  }
  async execute({state,id_action}):Promise<WarningsAction[]>{
    if(!state) throw new AppError("Value of status is undefined")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
  
    const listWarningsByStatus = this.warningsActionRepository.listByStatus({state,id_action})
    return listWarningsByStatus
  }
}
export{ListWarningsActionByStatusUseCase}
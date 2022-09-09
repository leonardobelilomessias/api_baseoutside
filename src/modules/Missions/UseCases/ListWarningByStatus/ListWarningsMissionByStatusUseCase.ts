import { AppError } from "../../../../shared/errors/AppError"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class ListWarningsMissionByStatusUseCase{
  private warningsMissionRepository:IWarningsMissionRepository
  constructor(warningsMissionRepository:IWarningsMissionRepository){
    this.warningsMissionRepository = warningsMissionRepository
  }
  async execute({state,id_mission}):Promise<WarningsMission[]>{
    if(!state||!id_mission) throw new AppError("Value of status  or mission is undefined")
    if(typeof state !== typeof Number()&& !!state)throw new AppError("Value of state must be a number.")
    const listWarningsByStatus = this.warningsMissionRepository.listByStatus({state,id_mission})
    return listWarningsByStatus
  }
}
export{ListWarningsMissionByStatusUseCase}
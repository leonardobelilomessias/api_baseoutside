import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericWarningsMissionDTOS } from "../../dtos/IWarningsMissionDTOS"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class ListWarningsMissionByTypeUseCase{
  private warningsMissionRepository:IWarningsMissionRepository
  constructor(warningsMissionRepository:IWarningsMissionRepository){
    this.warningsMissionRepository = warningsMissionRepository
  }
  async execute({type,id_mission}):Promise<IOutputGenericWarningsMissionDTOS[]>{
    if(!type) throw new AppError("Value of Type is undefined")
    if(typeof type !== typeof Number()&& !!type)throw new AppError("Value of Type must be a number.")
    const listWarningsByType = this.warningsMissionRepository.listByType({type,id_mission})
    return listWarningsByType
  }
}
export{ListWarningsMissionByTypeUseCase}
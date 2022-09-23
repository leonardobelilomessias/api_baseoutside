import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericWarningsMissionDTOS } from "../../dtos/IWarningsMissionDTOS"
import { WarningsMission } from "../../infra/typeorm/entities/WarningMission"
import { IWarningsMissionRepository } from "../../repositories/IWarningsMissionRepository"

class ListWarningsMissionUseCase{
  private warningsMissionRepository:IWarningsMissionRepository
  constructor(warningsMissionRepository:IWarningsMissionRepository){
    this.warningsMissionRepository = warningsMissionRepository
  }
  async execute(id_mission:string):Promise<IOutputGenericWarningsMissionDTOS[]>{
    console.log(id_mission)
    if(!id_mission) throw new AppError("Value of mission is undefined")
    const listWarnings = this.warningsMissionRepository.listByIdMission(id_mission)
    return listWarnings
  }
}
export{ListWarningsMissionUseCase}
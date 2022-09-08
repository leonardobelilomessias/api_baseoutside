import { AppError } from "../../../../shared/errors/AppError"
import { JourneyMission } from "../../infra/typeorm/entities/JourneyMission"
import { IJourneyMissionRepository } from "../../repositories/IJourneyRepository"

class ListJourneysMissionUseCase{
  private journeyMissionRepository:IJourneyMissionRepository
  constructor(journeyMissionRepository:IJourneyMissionRepository){
    this.journeyMissionRepository = journeyMissionRepository
  }
  async execute(id_Mission:string):Promise<JourneyMission[]>{
    if(!id_Mission) throw new AppError("Value sent is undefined")
    const journeysMission = this.journeyMissionRepository.listByIdMission(id_Mission)
    return journeysMission
  }
}
export{ListJourneysMissionUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { JourneyMission } from "../../infra/typeorm/entities/JourneyMission"
import { IJourneyMissionRepository } from "../../repositories/IJourneyRepository"

class DeleteJourneyMissionUseCase{
  private journeyMissionsRepository:IJourneyMissionRepository
  constructor(journeyMissionsRepository:IJourneyMissionRepository){
    this.journeyMissionsRepository = journeyMissionsRepository
  }
  async execute(id:string):Promise<JourneyMission>{ 
    if(!id)throw new AppError("Value sent is undefined")
    const deletedJourneyMission = await this.journeyMissionsRepository.delete(id)
    return deletedJourneyMission
  }
}
export{DeleteJourneyMissionUseCase}
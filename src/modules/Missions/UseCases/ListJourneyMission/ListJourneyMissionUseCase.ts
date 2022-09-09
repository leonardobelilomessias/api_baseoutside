import { AppError } from "../../../../shared/errors/AppError";
import { JourneyMission } from "../../infra/typeorm/entities/JourneyMission";
import { IJourneyMissionRepository } from "../../repositories/IJourneyRepository";

class ListJourneyMissionUseCase{
  private journerMissionRepository:IJourneyMissionRepository
  constructor(journerMissionRepository:IJourneyMissionRepository){
    this.journerMissionRepository = journerMissionRepository
  }
  async execute(id_mission:string):Promise<JourneyMission[]>{
    if(!id_mission)throw new AppError("Value sent of mission is undefined.")

    const findJourneyMission = await this.journerMissionRepository.listByIdMission(id_mission)
    return findJourneyMission
  }
}
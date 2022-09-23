import { IOutputGenericMissionDTO } from "../../dtos/IMissionDTO"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository"



class ListMissionUseCase{
  private missionRepository: MissionRepository
  constructor(missionRepository:MissionRepository) {
    this.missionRepository = missionRepository

  }
  async execute(): Promise<IOutputGenericMissionDTO[]>{
    const allMission = await  this.missionRepository.listAllMissions()
    return allMission
  }
  

}

export{ListMissionUseCase}
import { Mission } from "../../Entities/Mission"
import { MissionRepository } from "../../MissionRepository/MissionReposioty"


class ListMissionUseCase{
  private missionRepository: MissionRepository
  constructor(missionRepository:MissionRepository) {
    this.missionRepository = missionRepository

  }
  async execute(): Promise<Mission[]>{
    const allMission = await  this.missionRepository.list()
    return allMission
  }
  

}

export{ListMissionUseCase}
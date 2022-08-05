import { Mission } from "../../infra/typeorm/entities/Mission"
import { MissionRepository } from "../../infra/typeorm/repositories/MissionReposioty"



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
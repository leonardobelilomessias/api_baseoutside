import { Mission } from "../../Entities/Mission"
import { ICreateMission } from "../../MissionRepository/IMissonRepository"

import { MissionRepository } from "../../MissionRepository/MissionReposioty"


class CreateMissionUseCase{
  private missionRepository:MissionRepository
  constructor(missionRepository:MissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute({name,description,creator,image_profile}:ICreateMission):Promise<Mission>{
    const mission = await this.missionRepository.create({ name, description, creator, image_profile })
    return mission
  }
}

export{CreateMissionUseCase}
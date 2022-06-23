import { Mission } from "../../Entities/Mission"
import { ICreateMission } from "../../MissionRepository/DTOMissonRepository"
import { MissionRepository } from "../../MissionRepository/MissionReposioty"


class CreateMissionUseCase{
  private missionRepository:MissionRepository
  constructor(missionRepository:MissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute({name,description,create_by,image_profile}:ICreateMission):Promise<Mission>{
    const mission = await this.missionRepository.create({ name, description, create_by, image_profile })
    return mission
  }
}

export{CreateMissionUseCase}
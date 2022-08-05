import { Mission } from "../../infra/typeorm/entities/Mission"
import { MissionRepository } from "../../infra/typeorm/repositories/MissionReposioty"
import { ICreateMission } from "../../repositories/IMissonRepository"



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
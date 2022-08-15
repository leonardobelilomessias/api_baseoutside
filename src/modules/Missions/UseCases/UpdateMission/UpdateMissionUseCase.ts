import { AppError } from "../../../../shared/errors/AppError"
import { IUpdateMission } from "../../dtos/IUpdateMissionDTO"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"


class UpdateMissionUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute({id, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}:IUpdateMission): Promise<Mission>{
    const updatedMission = await this.missionRepository.updateMission({id, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field})
    return updatedMission
  }

}
export{UpdateMissionUseCase}
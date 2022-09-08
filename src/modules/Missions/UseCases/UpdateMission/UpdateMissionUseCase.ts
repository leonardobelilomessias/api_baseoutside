import { AppError } from "../../../../shared/errors/AppError"
import { cleanEmptySpace } from "../../../../utils/cleanEmptySpace"
import { IUpdateMission } from "../../dtos/IUpdateMissionDTO"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { IMissionRepository } from "../../repositories/IMissonRepository"


class UpdateMissionUseCase{
  private missionRepository: IMissionRepository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
  }
  async execute({id, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}:IUpdateMission): Promise<Mission>{
    const cleanFieldsMission = cleanEmptySpace({name,description,image_profile,local,field})
    Object.assign(cleanFieldsMission,{id,creator,date_end,date_start,duration,is_private,type})
    const updatedMission = await this.missionRepository.updateMission(cleanFieldsMission)
    return updatedMission
  }

}
export{UpdateMissionUseCase}
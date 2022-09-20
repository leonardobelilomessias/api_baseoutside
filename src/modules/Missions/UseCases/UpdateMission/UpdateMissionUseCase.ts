import { AppError } from "../../../../shared/errors/AppError"
import { cleanEmptySpace } from "../../../../utils/cleanEmptySpace"
import { IUpdateMission } from "../../dtos/IUpdateMissionDTO"
import { Mission } from "../../infra/typeorm/entities/Mission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IMissionRepository } from "../../repositories/IMissonRepository"


class UpdateMissionUseCase{
  private missionRepository: IMissionRepository
  private menagerMissionPermissionRepository:MenagerPermissionRespository
  constructor(missionRepository: IMissionRepository) {
    this.missionRepository = missionRepository
    this.menagerMissionPermissionRepository = new MenagerPermissionRespository()
  }
  async execute({ id_agent_token,id, name,description,image_profile,date_end,date_start,duration,is_private,local,type,field}): Promise<Mission>{
    if(!id) throw new AppError(" Dont sent mission.")
    const alowUpdateMission = await this.menagerMissionPermissionRepository.confirmePermissionMission({id_agent_token})
    if(!alowUpdateMission)throw new AppError("Agent authenticate does not permission to that action.")
    const cleanFieldsMission = cleanEmptySpace({name,description,image_profile,local,field})
    Object.assign(cleanFieldsMission,{id,date_end,date_start,duration,is_private,type})
    const updatedMission = await this.missionRepository.updateMission(cleanFieldsMission)
    return updatedMission
  }

}
export{UpdateMissionUseCase}
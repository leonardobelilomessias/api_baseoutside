import { AppError } from "../../../../shared/errors/AppError";
import { cleanEmptySpace } from "../../../../utils/cleanEmptySpace";
import { ICreateMissionDTO } from "../../dtos/ICreateMissionDTO";
import { Mission } from "../../infra/typeorm/entities/Mission";
import { MissionRepository } from "../../infra/typeorm/repositories/MissionReposioty";
import { IMissionRepository } from "../../repositories/IMissonRepository";

class CreateMissionUseCase{
  private missionRepository:IMissionRepository
  constructor(missionRepository:IMissionRepository) {
    this.missionRepository = missionRepository
  }

  async execute({identifier,id_agent_token, name,description,creator,image_profile,date_end,date_start,duration,is_private,local,type,field}): Promise<Mission>{
    
    const existMission = await this.missionRepository.findByName(name);
    if (existMission) throw new AppError('Mission already exist');
    if ((!name || !description || !creator)) throw new AppError("Is necessary fill all filds");
    if(creator!== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const missionClean  = await cleanEmptySpace({identifier,name,description,creator,image_profile,local,field,type})
    Object.assign(missionClean,{date_end,date_start,duration,is_private})
    const mission = await this.missionRepository.create(missionClean)
    return mission
  }
}

export{CreateMissionUseCase}
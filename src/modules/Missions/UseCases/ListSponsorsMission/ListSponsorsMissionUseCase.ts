import { AppError } from "../../../../shared/errors/AppError"
import { SponsorMission } from "../../infra/typeorm/entities/SponsorMission"
import { ISponsorMissionRepository } from "../../repositories/ISponsorMissionRepository"

class ListSponsorsMissionUseCase{
  private sponsorsMissionsRepository:ISponsorMissionRepository
  constructor(sponsorsMissionsRepository:ISponsorMissionRepository){
    this.sponsorsMissionsRepository = sponsorsMissionsRepository
  }
  async execute(id_mission:string):Promise<SponsorMission[]>{
    if(!id_mission) throw new AppError("Value of Mission is undefined.")
    const sponsorsMission = await  this.sponsorsMissionsRepository.listSponsorsMission(id_mission)
    return sponsorsMission
  }
}
export{ListSponsorsMissionUseCase}
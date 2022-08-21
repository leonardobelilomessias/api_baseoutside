import { AppError } from "../../../../shared/errors/AppError"
import { SponsorMission } from "../../infra/typeorm/entities/SponsorMission"
import { ISponsorMissionRepository } from "../../repositories/ISponsorMissionRepository"

class ListMissionsSponsorUsecase{
    private sponsorsMissionsRepository:ISponsorMissionRepository
    constructor(sponsorsMissionsRepository:ISponsorMissionRepository){
      this.sponsorsMissionsRepository = sponsorsMissionsRepository
    }
    async execute(id_sponsor):Promise<SponsorMission[]>{
      if(!id_sponsor) throw new AppError("Value of sponsor is undefined.")
      const missionsSponsor = await this.sponsorsMissionsRepository.listMissionsSponsor(id_sponsor)
      return missionsSponsor
    }
}
export{ListMissionsSponsorUsecase}
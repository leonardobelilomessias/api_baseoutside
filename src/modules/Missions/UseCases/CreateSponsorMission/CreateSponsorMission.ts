import { AppError } from "../../../../shared/errors/AppError"
import { SponsorMission } from "../../infra/typeorm/entities/SponsorMission"
import { ISponsorMissionRepository } from "../../repositories/ISponsorMissionRepository"

class CreateSponsorMissionUseCase{
  private sponsorMissionRepository: ISponsorMissionRepository
  constructor(sponsorMissionRepository:ISponsorMissionRepository) {
    this.sponsorMissionRepository = sponsorMissionRepository
  }
  
  async execute({ id_sponsor, id_mission, type, mission_private, sponsor_private }): Promise<SponsorMission>{
    if (!id_mission || !id_sponsor) throw new AppError('Value od mission ou sponsor is undefined')
    const createdSponsorMission = await this.sponsorMissionRepository.create({ id_sponsor, id_mission, type, mission_private, sponsor_private })
    return createdSponsorMission
  }

}
export{CreateSponsorMissionUseCase}
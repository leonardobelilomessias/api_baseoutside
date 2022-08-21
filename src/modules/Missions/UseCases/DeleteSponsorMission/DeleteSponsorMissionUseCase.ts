import { AppError } from "../../../../shared/errors/AppError"
import { SponsorMission } from "../../infra/typeorm/entities/SponsorMission"
import { ISponsorMissionRepository } from "../../repositories/ISponsorMissionRepository"

class DeleteSponsorMissionUseCase{
  private sponsorMissionRepository:ISponsorMissionRepository
  constructor(sponsorMissionRepository:ISponsorMissionRepository){
    this.sponsorMissionRepository = sponsorMissionRepository
  }
  async execute(id_mission:string,id_sponsor:string):Promise<SponsorMission>{
    if(!id_mission||!id_sponsor) throw new AppError("Value of mission or sponsor is undefined.")
    const deletedSponsor = await this.sponsorMissionRepository.deleteSponsorMission(id_sponsor,id_mission)
    return deletedSponsor
  }
} 
export{DeleteSponsorMissionUseCase}
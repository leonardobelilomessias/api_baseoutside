import { AppError } from "../../../../shared/errors/AppError"
import { IInputCreateSponsorMissionDTO, IOutputCreateSponsorMissionDTO } from "../../dtos/ISponsorMissionDTOS"
import { SponsorMission } from "../../infra/typeorm/entities/SponsorMission"
import { ISponsorMissionRepository } from "../../repositories/ISponsorMissionRepository"

class CreateSponsorMissionUseCase{
  private sponsorMissionRepository: ISponsorMissionRepository
  constructor(sponsorMissionRepository:ISponsorMissionRepository) {
    this.sponsorMissionRepository = sponsorMissionRepository
  }
  async execute({id_agent_token, id_sponsor, id_mission, type, mission_private, sponsor_private,value }:IInputCreateSponsorMissionDTO): Promise<IOutputCreateSponsorMissionDTO>{
    if (!id_mission || !id_sponsor||!type||!value) throw new AppError('Some required value is undefined')
    if(id_agent_token !== id_sponsor) throw new AppError(" Agent authenticate haven't outhorization to this action.")
    if(type!=="unique" && type!=="recurrent") throw new AppError("Type must be current or unique.")
    const foundSponsorMission = await this.sponsorMissionRepository.findSponsorMission(id_sponsor,id_mission)
    if(foundSponsorMission) throw new AppError('Sponsor already existe')
    const createdSponsorMission = await this.sponsorMissionRepository.create({ id_sponsor, id_mission, type, mission_private, sponsor_private,value })
    return createdSponsorMission
  }
}
export{CreateSponsorMissionUseCase}
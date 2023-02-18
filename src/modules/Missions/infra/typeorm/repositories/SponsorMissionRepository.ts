import { Repository } from "typeorm";
import { AppError } from "../../../../../shared/errors/AppError";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IOutputSponsorMissionDTO } from "../../../dtos/ISponsorMissionDTOS";
import { ISponsorMissionRepository } from "../../../repositories/ISponsorMissionRepository";
import { SponsorMission } from "../entities/SponsorMission";

class SponsorsMissionsRepository implements ISponsorMissionRepository{
  private sponsorsMissionsRepository:Repository<SponsorMission>
  constructor(){
    this.sponsorsMissionsRepository = AppDataSource.getRepository("sponsors_missions")
  }
  async create({ id_sponsor, id_mission, type, sponsor_private, mission_private ,value}): Promise<IOutputSponsorMissionDTO> {
    try{
      const newSponsorMission = new SponsorMission()
      Object.assign(newSponsorMission,{ id_sponsor, id_mission, type:1, sponsor_private, mission_private ,value})
      const createdSponsor = await this.sponsorsMissionsRepository.save(newSponsorMission)
      return createdSponsor
    }catch{
      throw new AppError("There was some error.")
    }
  } 
  async findSponsorMission(id_sponsor: string, id_mission: string): Promise<IOutputSponsorMissionDTO> {
    const foundSponsorMission = await this.sponsorsMissionsRepository.findOne({
      where:{id_mission:id_mission,id_sponsor:id_sponsor}
    })
    if(!foundSponsorMission )return null
    return foundSponsorMission
  }
  async listSponsorsMission(id_mission: string): Promise<IOutputSponsorMissionDTO[]> {
    const sponsorsMission = await this.sponsorsMissionsRepository.find({
      where:{id_mission:id_mission,sponsor_private:false}
    })
    return sponsorsMission
  }
 async  listMissionsSponsor(id_sponsor: string): Promise<IOutputSponsorMissionDTO[]> {

    const missionsSponsor = await this.sponsorsMissionsRepository.find({
      where:{id_sponsor:id_sponsor}
    })
    return missionsSponsor
  }
  async deleteSponsorMission({id_sponsor, id_mission}): Promise<IOutputSponsorMissionDTO> {
    const sponsorMission = await this.sponsorsMissionsRepository.findOne({where:{id_mission:id_mission,id_sponsor:id_sponsor}})
    if(!sponsorMission) throw new AppError("Sponsor Mission not found")
    const deletedSponsorMission = await this.sponsorsMissionsRepository
    .createQueryBuilder()
    .delete()
    .from("sponsors_missions")
    .where("id = :id", { id:sponsorMission.id})
    .execute()
    return sponsorMission
  }
}
export{SponsorsMissionsRepository}
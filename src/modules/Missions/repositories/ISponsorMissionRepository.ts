import { IOutputSponsorMissionDTO } from "../dtos/ISponsorMissionDTOS";
import { SponsorMission } from "../infra/typeorm/entities/SponsorMission";

interface ISponsorMissionRepository{

  create({ id_sponsor, id_mission, type, sponsor_private, mission_private ,value}): Promise<IOutputSponsorMissionDTO>
  
  findSponsorMission(id_sponsor:string, id_mission:string): Promise<IOutputSponsorMissionDTO>
  
  listSponsorsMission(id_mission:string): Promise<IOutputSponsorMissionDTO[]>
  
  listMissionsSponsor(id_sponsor:string):Promise<IOutputSponsorMissionDTO[]>

  deleteSponsorMission({id_sponsor,id_mission}):Promise<IOutputSponsorMissionDTO>
}
export {ISponsorMissionRepository}
import { SponsorMission } from "../infra/typeorm/entities/SponsorMission";

interface ISponsorMissionRepository{

  create({ id_sponsor, id_mission, type, sponsor_private, mission_private }): Promise<SponsorMission>
  
  findSponsorMission(id_sponsor:string, id_mission:string): Promise<SponsorMission>
  
  listSponsorsMission(id_mission:string): Promise<SponsorMission>
  
  ListMissionSponsor(id_sponsor:string):Promise<SponsorMission>

  deleteSponsorMission(id_sponsor:string,id_mission:string):Promise<SponsorMission>
}
export {ISponsorMissionRepository}
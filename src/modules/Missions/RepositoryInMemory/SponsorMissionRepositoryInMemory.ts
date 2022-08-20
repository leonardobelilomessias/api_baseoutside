import { SponsorAgent } from "../../agents/infra/typeorm/entities/SponsorAgent";
import { SponsorMission } from "../infra/typeorm/entities/SponsorMission";
import { ISponsorMissionRepository } from "../repositories/ISponsorMissionRepository";

class SponsorMissionRepositoryInMemory implements ISponsorMissionRepository{
  private sponsorAgentRepositoryInMemory: SponsorMission[]
  constructor() {
    this.sponsorAgentRepositoryInMemory = []
  }
 async  create({ id_sponsor, id_mission, type, sponsor_private, mission_private }: { id_sponsor: any; id_mission: any; type: any; sponsor_private: any; mission_private: any; }): Promise<SponsorMission> {
    const newSponsorAgent = new SponsorMission()
    Object.assign(newSponsorAgent, { id_sponsor, id_mission, type, sponsor_private, mission_private })
   await this.sponsorAgentRepositoryInMemory.push()
   return newSponsorAgent
  }
  findSponsorMission(id_sponsor: string, id_mission: string): Promise<SponsorMission> {
    throw new Error("Method not implemented.");
  }
  listSponsorsMission(id_mission: string): Promise<SponsorMission> {
    throw new Error("Method not implemented.");
  }
  ListMissionSponsor(id_sponsor: string): Promise<SponsorMission> {
    throw new Error("Method not implemented.");
  }
  deleteSponsorMission(id_sponsor: string, id_mission: string): Promise<SponsorMission> {
    throw new Error("Method not implemented.");
  }

}
export{SponsorMissionRepositoryInMemory}
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
   await this.sponsorAgentRepositoryInMemory.push(newSponsorAgent)
   return newSponsorAgent
  }
  async findSponsorMission(id_sponsor: string, id_mission: string): Promise<SponsorMission> {
    const foundSponsorMission = await this.sponsorAgentRepositoryInMemory.find(sponsorMission=>{
      return (sponsorMission.id_mission ===id_mission && sponsorMission.id_sponsor === id_sponsor)})
      if(!foundSponsorMission) null
      return foundSponsorMission
    }
 async listSponsorsMission(id_mission: string): Promise<SponsorMission[]> {
    const sponsorsMission = await this.sponsorAgentRepositoryInMemory
    return sponsorsMission
  }
  async listMissionsSponsor(id_sponsor: string): Promise<SponsorMission[]> {
    const sponsorsMission = await this.sponsorAgentRepositoryInMemory.filter(sponsorMission=>(sponsorMission.id_sponsor===id_sponsor))
    return sponsorsMission
  }
  async deleteSponsorMission({id_sponsor, id_mission}): Promise<SponsorMission> {
    const foundIndeSponsorMission = await this.sponsorAgentRepositoryInMemory.findIndex(sponsorMision=>(sponsorMision.id_mission ===id_mission && sponsorMision.id_sponsor ===id_sponsor))
    const deletedSponsor = await this.sponsorAgentRepositoryInMemory.splice(foundIndeSponsorMission,1)
    return deletedSponsor[0]
  }

}
export{SponsorMissionRepositoryInMemory}
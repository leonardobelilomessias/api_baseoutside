import { AppError } from "../../../shared/errors/AppError";
import { AdminMission } from "../infra/typeorm/entities/AdminMission";
import { AgentMission } from "../infra/typeorm/entities/AgentMission";
import { Mission } from "../infra/typeorm/entities/Mission";
import { IAdminMissionRepository } from "../repositories/IAdminMissionRepository";

class AdminMissionRepositoryInMemory implements IAdminMissionRepository{
  private adminMissionReposioryInMemory: AdminMission[]
  private missionRepositoryInMemory: Mission[]
  constructor() {
    this.adminMissionReposioryInMemory = []
    this.missionRepositoryInMemory = []
  }
  listAdminsMission(id_mission: string): Promise<AdminMission[]> {
    throw new Error("Method not implemented.");
  }
  findAgentInMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
    throw new Error("Method not implemented.");
  }
  async createAdminMission({ id_mission, id_agent, type }: { id_mission: any; id_agent: any; type: any; }): Promise<AdminMission> {
    const foundMission = await this.missionRepositoryInMemory.find(mission => (mission.id === id_mission))
    if (!foundMission) new AppError("Mission not found")
    return 
    
  }
  findAdminMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AdminMission> {
    throw new Error("Method not implemented.");
  }
  updateAdminMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AdminMission> {
    throw new Error("Method not implemented.");
  }
  deleteAdminMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AdminMission> {
    throw new Error("Method not implemented.");
  }

}
export{AdminMissionRepositoryInMemory}
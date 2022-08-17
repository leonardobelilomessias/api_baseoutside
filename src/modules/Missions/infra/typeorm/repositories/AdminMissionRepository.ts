import { IAdminMission } from "../../../repositories/IAdminMissionRepository";
import { AdminMission } from "../entities/AdminMission";

class AdminMissionRepository implements IAdminMission{
  createAdminMission({ id_mission, id_agent, type }: { id_mission: any; id_agent: any; type: any; }): Promise<AdminMission> {
    throw new Error("Method not implemented.");
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
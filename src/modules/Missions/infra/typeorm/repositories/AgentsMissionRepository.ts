import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IAgentsMissions } from "../../../repositories/IAgentsMissions";
import { AgentMission } from "../entities/AgentMission";

class AgentsMissionRepository implements IAgentsMissions{
  private agentsMissionRepository:Repository<AgentMission>
  constructor() {
    this.agentsMissionRepository = AppDataSource.getRepository(AgentMission)
  }
 async  create({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
   const newAgentMission = new AgentMission()
   Object.assign(newAgentMission, { id_mission, id_agent })
   const createdAgentMission = await this.agentsMissionRepository.save(newAgentMission)
   return createdAgentMission
  }
  findAgentMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
    throw new Error("Method not implemented.");
  }
  delete({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
    throw new Error("Method not implemented.");
  }
  findAllAgentsMission(id_mission: string): Promise<AgentMission[]> {
    throw new Error("Method not implemented.");
  }
  findAllMissionsAgent(id_agent: string): Promise<AgentMission[]> {
    throw new Error("Method not implemented.");
  }

}
export{AgentsMissionRepository}
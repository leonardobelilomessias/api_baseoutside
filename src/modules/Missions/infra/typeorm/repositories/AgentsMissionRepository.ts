import { Repository } from "typeorm";
import { AppDataSource } from "../../../../../shared/infra/typeorm";
import { IOutputAgentMissionDTO } from "../../../dtos/IAgentMissionDTOS";
import { IAgentsMissions } from "../../../repositories/IAgentsMissions";
import { AgentMission } from "../entities/AgentMission";

class AgentsMissionRepository implements IAgentsMissions{
  private agentsMissionRepository:Repository<AgentMission>
  constructor() {
    this.agentsMissionRepository = AppDataSource.getRepository(AgentMission)
  }
 async  findByIdAgent(id_agent: string): Promise<IOutputAgentMissionDTO> {
    const findAgentById = await this.agentsMissionRepository.findOne({where:{id_agent}})
    return findAgentById
  }
 async  create({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<IOutputAgentMissionDTO> {
   const newAgentMission = new AgentMission()
   Object.assign(newAgentMission, { id_mission, id_agent })
   const createdAgentMission = await this.agentsMissionRepository.save(newAgentMission)
   return createdAgentMission
  }
 async findAgentMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<IOutputAgentMissionDTO> {
   const agentMission = await this.agentsMissionRepository.findOne({
    where:{id_agent:id_agent,id_mission:id_mission}
   })
   return agentMission
  }
 async  delete({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<IOutputAgentMissionDTO> {
    const agentMission = await  this.agentsMissionRepository.findOne({where:{ id_agent: id_agent, id_mission: id_mission }})
    await this.agentsMissionRepository
    .createQueryBuilder()
    .delete()
    .from(AgentMission)
    .where("id = :id", { id:agentMission.id})
    .execute()
    return agentMission
  }
  async findAllAgentsMission(id_mission: string): Promise<IOutputAgentMissionDTO[]> {
    const listAgentsMission = await this.agentsMissionRepository.find({
      where:{id_mission:id_mission}
    })
    return listAgentsMission
  }
  async findAllMissionsAgent(id_agent: string): Promise<IOutputAgentMissionDTO[]> {
    const listMissionsAgent = await this.agentsMissionRepository.find({
      where:{id_agent:id_agent}
    })
    return listMissionsAgent
  }

}
export{AgentsMissionRepository}
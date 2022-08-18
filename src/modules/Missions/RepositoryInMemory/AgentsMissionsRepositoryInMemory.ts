import { AppError } from "../../../shared/errors/AppError";
import { AgentMission } from "../infra/typeorm/entities/AgentMission";
import { IAgentsMissions } from "../repositories/IAgentsMissions";

class AgentsMissionsRepositoryInMemory implements IAgentsMissions{
  private agentsMissionrepositoryInMemory: AgentMission[]
  constructor() {
    this.agentsMissionrepositoryInMemory = []
  }
 async  findAllAgentsMission(id_mission: string): Promise<AgentMission[]> {
   const allAgentsMission = await this.agentsMissionrepositoryInMemory.filter(AgentMission => (AgentMission.id_mission === id_mission))
   if (allAgentsMission.length === 0) return null 
   return allAgentsMission
  }
  async findAllMissionsAgent(id_agent: string): Promise<AgentMission[]> {
    const allMissionagent = await this.agentsMissionrepositoryInMemory.filter(missionAgent => (missionAgent.id_agent === id_agent))
    if (allMissionagent.length === 0) return null 
    return allMissionagent
  }
  async create({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
    const existAgentMission = this.agentsMissionrepositoryInMemory.find(agentMission => ((agentMission.id_agent === id_agent && agentMission.id_mission === id_mission)))
    if (existAgentMission) throw new AppError("thats agent already to participe of mission")
    const newAgentsMissions = new AgentMission()
    Object.assign(newAgentsMissions,{id_agent,id_mission})
    await  this.agentsMissionrepositoryInMemory.push(newAgentsMissions)
    return  newAgentsMissions
  }
  async findAgentMission({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
    const foundAgentMission = await this.agentsMissionrepositoryInMemory.find(agentMission => ((agentMission.id_agent === id_agent && agentMission.id_mission === id_mission)))
    console.log(foundAgentMission)
    return foundAgentMission
  }
  async delete({ id_agent, id_mission }: { id_agent: any; id_mission: any; }): Promise<AgentMission> {
    const foundAgentMissionIndex = await this.agentsMissionrepositoryInMemory.findIndex(agentMission => ((agentMission.id_agent === id_agent && agentMission.id_mission === id_mission)))
    const deletedAgentMission = this.agentsMissionrepositoryInMemory.splice(foundAgentMissionIndex, 1)
    return deletedAgentMission[0]
  }

}
export{AgentsMissionsRepositoryInMemory}
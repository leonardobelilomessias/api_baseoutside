import { AppError } from "../../../../shared/errors/AppError"
import { IAgentRepository } from "../../../Agents/repositories/IAgentRepository"
import { AgentMission } from "../../infra/typeorm/entities/AgentMission"
import { IAgentsMissions } from "../../repositories/IAgentsMissions"
import { IMissionRepository } from "../../repositories/IMissonRepository"

class CreateAgentMissionUseCase{
  constructor(
    private agentsMissionsRepository: IAgentsMissions,
    private missionRepository: IMissionRepository,
    private agentRepository:IAgentRepository
  ) {
    this.agentsMissionsRepository = agentsMissionsRepository
    this.agentRepository = agentRepository
    this.missionRepository = missionRepository
  }
  async execute(id_mission:string,id_agent:string):Promise<AgentMission> {
    if(!id_mission||!id_agent) throw new AppError("Value of  mission or agent cannot be undefined.")
    const foundMission = await this.missionRepository.findById(id_mission)
    if (!foundMission) throw new AppError("Mission not found.")
    const foundAgent = await this.agentRepository.findById(id_agent)
    const foundAgentInMission = await this.agentsMissionsRepository.findAgentMission({id_agent,id_mission})
    if(foundAgentInMission) throw new AppError("Agent already are in mission.")
    if(!foundAgent) throw new AppError("Agent not found.")
    const createdAgentMission = await this.agentsMissionsRepository.create({ id_agent, id_mission })
    return createdAgentMission
  }
}
export {CreateAgentMissionUseCase}
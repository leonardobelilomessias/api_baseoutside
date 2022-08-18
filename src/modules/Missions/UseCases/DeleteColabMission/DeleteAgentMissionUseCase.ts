import { AppError } from "../../../../shared/errors/AppError"
import { AgentMission } from "../../infra/typeorm/entities/AgentMission"
import { IAgentsMissions } from "../../repositories/IAgentsMissions"

class DeleteAgentMissionUseCase{
  private agentsMissionsRepository: IAgentsMissions
  constructor(agentsMissionsRepository: IAgentsMissions) {
    this.agentsMissionsRepository = agentsMissionsRepository
  }
  async execute(id_agent: string, id_mission: string): Promise<AgentMission>{
    if(!id_agent||!id_mission) throw new AppError("Value of agent or mission is undefined")
    const findAgentMission = await this.agentsMissionsRepository.findAgentMission({ id_agent, id_mission })
    if (!findAgentMission) throw new AppError("Colab not found")
    const deletedAgentMission = await this.agentsMissionsRepository.delete({id_agent,id_mission})
    return deletedAgentMission    
  }
}
export{DeleteAgentMissionUseCase}
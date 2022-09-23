import { AppError } from "../../../../shared/errors/AppError"
import { IInputDeleteAgentMissionDTO, IOutputGenericAgentMissionDTO } from "../../dtos/IAgentMissionDTOS"
import { AgentMission } from "../../infra/typeorm/entities/AgentMission"
import { MenagerPermissionRespository } from "../../infra/typeorm/repositories/MenagerPermissionRepository"
import { IAgentsMissions } from "../../repositories/IAgentsMissions"

class DeleteAgentMissionUseCase{
  private agentsMissionsRepository: IAgentsMissions
  private menageMissionsPermissions:MenagerPermissionRespository
  constructor(agentsMissionsRepository: IAgentsMissions,) {
    this.agentsMissionsRepository = agentsMissionsRepository
    this.menageMissionsPermissions = new MenagerPermissionRespository()
  }
  async execute({id_agent,id_mission, id_agent_token}:IInputDeleteAgentMissionDTO): Promise<IOutputGenericAgentMissionDTO>{
    if(!id_agent||!id_mission) throw new AppError("Value of agent or mission is undefined")
    const alowDeleteAgentMission = await this.menageMissionsPermissions.confirmePermissionMission({id_agent_token,id_mission})
    console.log((id_agent !==id_agent_token || !alowDeleteAgentMission === true))
    if(id_agent !==id_agent_token && !alowDeleteAgentMission === true) throw new AppError("Agent does not authorized to execute this action.")
    const findAgentMission = await this.agentsMissionsRepository.findAgentMission({ id_agent, id_mission })
    if (!findAgentMission) throw new AppError("Agent not found")
    const deletedAgentMission = await this.agentsMissionsRepository.delete({id_agent,id_mission})
    return deletedAgentMission    
  }
}
export{DeleteAgentMissionUseCase}
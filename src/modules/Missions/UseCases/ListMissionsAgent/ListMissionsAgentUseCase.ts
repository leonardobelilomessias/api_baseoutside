
import { AppError } from "../../../../shared/errors/AppError";
import { IOutputGenericAgentMissionDTO } from "../../dtos/IAgentMissionDTOS";
import { IAgentsMissions } from "../../repositories/IAgentsMissions";

class ListMissionsAgentUseCase{
  private agentsMissionsRepository: IAgentsMissions
  constructor(agentsMissionsRepository: IAgentsMissions) {
    this.agentsMissionsRepository = agentsMissionsRepository
  }
  
  async execute(id_agent: string):Promise<IOutputGenericAgentMissionDTO[]> {
    if(!id_agent) throw new AppError("Value of agent is undefined")
    const listMissionsAgent = await this.agentsMissionsRepository.findAllMissionsAgent(id_agent)
    if(!listMissionsAgent) throw new AppError("Agent not found")
    return listMissionsAgent
  }
}
export{ListMissionsAgentUseCase}
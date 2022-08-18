
import { AppError } from "../../../../shared/errors/AppError";
import { IAgentRepository } from "../../../agents/repositories/IAgentRepository";
import { IAgentsMissions } from "../../repositories/IAgentsMissions";

class ListMissionsAgentUseCase{
  private agentsMissionsRepository: IAgentsMissions
  constructor(agentsMissionsRepository: IAgentsMissions) {
    this.agentsMissionsRepository = agentsMissionsRepository
  }
  
  async execute(id_agent: string) {
    if(!id_agent) throw new AppError("Value of agent is undefined")
    const listMissionsAgent = await this.agentsMissionsRepository.findAllMissionsAgent(id_agent)
    if(!listMissionsAgent) throw new AppError("Agent not found")
    return listMissionsAgent
  }
}
export{ListMissionsAgentUseCase}
import { AppError } from "../../../../shared/errors/AppError";
import { IOutputGenericAgentMissionDTO } from "../../dtos/IAgentMissionDTOS";
import { IAgentsMissions } from "../../repositories/IAgentsMissions";

class ListAgentsMissionUseCase{
  private agentsMissionsRepository: IAgentsMissions
  constructor(agentsMissionsRepository: IAgentsMissions) {
    this.agentsMissionsRepository = agentsMissionsRepository
  }
  async execute(id_mission: string):Promise<IOutputGenericAgentMissionDTO[]> {
    if(!id_mission) throw new AppError("Value of mission is undefined")
    const lisAgentsMission = await this.agentsMissionsRepository.findAllAgentsMission(id_mission)
    if(!lisAgentsMission) throw new AppError("Mission not found")
    return lisAgentsMission
  }
}
export{ListAgentsMissionUseCase}
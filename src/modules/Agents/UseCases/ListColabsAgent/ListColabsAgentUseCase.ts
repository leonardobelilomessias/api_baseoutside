import { AppError } from "../../../../shared/errors/AppError"
import { IOutputListColabsDTO } from "../../DTOS/IColabAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { MapResponseAgent } from "../../../../utils/handledatAgent/MapFields/MapResponseAgent"
import { IColabRepository } from "../../repositories/IColabRepository"

class ListColabsAgentUseCase {
  private colabAgentRepository: IColabRepository
  constructor(colabAgentRepository: IColabRepository) {
    this.colabAgentRepository = colabAgentRepository
  }
  async execute(id_agent: string): Promise<IOutputListColabsDTO[]> {
    if (!id_agent) throw new AppError("Value sent of agent is undefined.")
    const colabsAgent = await this.colabAgentRepository.listColabAgent(id_agent)
    const mapFieldsListColabs = colabsAgent.map(agent => (MapResponseAgent.mapFields(agent)))
    return mapFieldsListColabs
  }

}
export { ListColabsAgentUseCase }
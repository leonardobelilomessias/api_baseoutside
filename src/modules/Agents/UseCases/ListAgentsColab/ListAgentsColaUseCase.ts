import { AppError } from "../../../../shared/errors/AppError"
import { IOutputListColabsDTO } from "../../DTOS/IColabAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { ColabAgent } from "../../infra/typeorm/entities/ColabAgent"
import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository"
import { MapResponseAgent } from "../../../../utils/handledatAgent/MapFields/MapResponseAgent"

class ListAgentsColabUseCase {
  private colabAgentRepository: ColabAgentRepository
  constructor(colabAgentRepository: ColabAgentRepository) {
    this.colabAgentRepository = colabAgentRepository
  }
  async execute(id_colab: string): Promise<IOutputListColabsDTO[]> {
    if (!id_colab) throw new AppError("Value sent of  colab is undefined")
    const listAgentColab = await this.colabAgentRepository.listAgentColab(id_colab)
    const mapFieldsListColabs = listAgentColab.map(agent => (MapResponseAgent.mapFields(agent)))
    return mapFieldsListColabs
  }
}
export { ListAgentsColabUseCase }
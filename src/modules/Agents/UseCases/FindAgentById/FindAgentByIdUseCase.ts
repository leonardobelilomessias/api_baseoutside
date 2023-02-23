import { AppError } from "../../../../shared/errors/AppError"
import { MapResponseAgent } from "../../../../utils/handledatAgent/MapFields/MapResponseAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class FindAgentByIdUseCase {
  private agentRepository: IAgentRepository
  constructor(agentRepository: IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute(id_agent: string) {
    if (!id_agent) throw new AppError("Value id is undefined")
    const agentById = await this.agentRepository.findById(id_agent)
    return MapResponseAgent.mapFields(agentById)
  }
}
export { FindAgentByIdUseCase }
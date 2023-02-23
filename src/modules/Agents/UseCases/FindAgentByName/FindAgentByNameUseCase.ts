import { AppError } from "../../../../shared/errors/AppError"
import { IOutputAgentDTO, IOutputGenericAgentDTO } from "../../DTOS/IAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { MapResponseAgent } from "../../../../utils/handledatAgent/MapFields/MapResponseAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class FindAgentByNameUseCase {
  private agentRepository: IAgentRepository
  constructor(agentRepository: IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute({ name }): Promise<IOutputGenericAgentDTO | IOutputAgentDTO> {
    if (!name) throw new AppError("Value of field names is empty.")
    console.log(name)
    const handleName = name.trim()
    const foundAgent = await this.agentRepository.findByName(handleName)
    if (!foundAgent) return foundAgent
    const responseMapFieldsAgent = MapResponseAgent.mapFields(foundAgent)
    return responseMapFieldsAgent
  }

}
export { FindAgentByNameUseCase }
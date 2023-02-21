import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericAgentDTO } from "../../DTOS/IAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { MapResponseAgent } from "../../MapFields/MapResponseAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class FindAgentByNameUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute({name}):Promise<IOutputGenericAgentDTO> {
    if(!name) throw new AppError("Value of field names is empty.")
    const handleName = name.trim()
    const foundAgent = await  this.agentRepository.findByName(handleName)
    if(!foundAgent)  throw new AppError('Agent not found')
    const responseMapFieldsAgent = MapResponseAgent.mapFields(foundAgent)
    return responseMapFieldsAgent
  }

}
export{FindAgentByNameUseCase}
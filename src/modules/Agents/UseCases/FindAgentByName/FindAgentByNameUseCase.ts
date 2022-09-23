import { AppError } from "../../../../shared/errors/AppError"
import { IOutputGenericAgentDTO } from "../../DTOS/IAgentDTOS"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { MapResponseCreateAgent } from "../../MapFields/MapResponseCreateAgent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class FindAgentByNameUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute(name:string):Promise<IOutputGenericAgentDTO> {
    if(!name) throw new AppError("Value of field names is empty.")
    const handleName = name.trim()
    const foundAgent = await  this.agentRepository.findByName(handleName)
    const responseMapFieldsAgent = MapResponseCreateAgent.mapFields(foundAgent)
    return responseMapFieldsAgent
  }

}
export{FindAgentByNameUseCase}
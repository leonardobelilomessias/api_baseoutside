import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class FindAgentByNameUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute(name:string):Promise<Agent> {
    if(!name) throw new AppError("Value of field names is empty.")
    const handleName = name.trim()
    const foundAgent = await  this.agentRepository.findByName(handleName)
    return foundAgent
  }

}
export{FindAgentByNameUseCase}
import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class DeactivateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute( {id, password}): Promise<Agent> {
    if(!id||!password)throw new AppError("Value of password or id is undefined")
    const existAgent = await  this.agentRepository.findById(id)
    if(!existAgent) throw new AppError("agent does not exist") 
    const agentWillBeDeactivate = await this.agentRepository.deactivate({id,password} )
    
    return agentWillBeDeactivate
  }

}
export{DeactivateAgentUseCase}
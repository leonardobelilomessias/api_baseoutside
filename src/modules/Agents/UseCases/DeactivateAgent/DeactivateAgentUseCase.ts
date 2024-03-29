import { AppError } from "../../../../shared/errors/AppError"
import { Agent } from "../../infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../repositories/IAgentRepository"


class DeactivateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository:IAgentRepository) {
    this.agentRepository = agentRepository
  }
  async execute( {id, password, id_agent_token}): Promise<Agent> {
    if(!id||!password)throw new AppError("Value of password or id is undefined")
    if(id !== id_agent_token) throw new AppError("Token sen not to own agent authenticate ")
    const existAgent = await  this.agentRepository.findById(id)
    if(!existAgent) throw new AppError("agent does not exist") 
    const agentWillBeDeactivate = await this.agentRepository.deactivate({id,password} )
    
    return agentWillBeDeactivate
  }

}
export{DeactivateAgentUseCase}
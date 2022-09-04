import { AppError } from "../../../shared/errors/AppError"
import { Agent } from "../../Agents/infra/typeorm/entities/Agent"
import { IAgentRepository } from "../../Agents/repositories/IAgentRepository"
import { IAgentTokenRepository } from "../UserToken/repositories/IAgentTokenRepository"

class ResetPasswordUseCase{
  private agentRepository:IAgentRepository
  private agentTokenRepository:IAgentTokenRepository
  constructor(agentRepository:IAgentRepository,agentTokenRepository:IAgentTokenRepository){
    this.agentRepository = agentRepository
    this.agentTokenRepository = agentTokenRepository
  }
  async execute({token,id_agent,password}):Promise<Agent>{
    if(!token) throw new AppError("Token is undefiend.")
    const agent = await this.agentTokenRepository.findById(id_agent,token)
    if(!agent)throw new AppError("agent not found.")
    const resetAgent = this.agentRepository.resetPassword({id_agent,password})
    return resetAgent
  }
}
export{
  ResetPasswordUseCase
}
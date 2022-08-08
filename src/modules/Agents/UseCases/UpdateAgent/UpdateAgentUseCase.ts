import { AppError } from "../../../../shared/errors/AppError"
import { IAgentRepository, EditAgent } from "../../repositories/IAgentRepository"



class UpdateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository: IAgentRepository) {
    this.agentRepository = agentRepository
  }
  
  async execute({ id, name, description, email, interests, skills, vocation, }: EditAgent) {
    const agentExist = await this.agentRepository.findById(id)
    if(!agentExist) throw new AppError('Agent not found')
    const agentToEdit = await this.agentRepository.edit({ id, name, description, email,interests,skills,vocation})
    return agentToEdit
  }

}
export {UpdateAgentUseCase}
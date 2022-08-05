import { IAgentRepository, EditAgent } from "../../repositories/IAgentRepository"



class UpdateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository: IAgentRepository) {
    this.agentRepository = agentRepository
  }
  
  async execute({ id, name, description, email,interests,skills }: EditAgent) {
    const agentToEdit = await this.agentRepository.edit({ id, name, description, email,interests,skills })
    return agentToEdit
  }

}
export {UpdateAgentUseCase}
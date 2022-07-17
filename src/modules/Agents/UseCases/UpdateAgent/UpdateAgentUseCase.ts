import { DTOAgentRepository, EditAgent } from "../../Repository/DTOAgentRepository"



class UpdateAgentUseCase{
  private agentRepository: DTOAgentRepository
  constructor(agentRepository: DTOAgentRepository) {
    this.agentRepository = agentRepository
  }
  
  async execute({ id, name, description, email,interests,skills }: EditAgent) {
    const agentToEdit = await this.agentRepository.edit({ id, name, description, email,interests,skills })
    return agentToEdit
  }

}
export {UpdateAgentUseCase}
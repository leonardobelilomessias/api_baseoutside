import { DTOAgentRepository, EditAgent } from "../../Repository/DTOAgentRepository"



class UpdateAgentUseCase{
  private agentRepository: DTOAgentRepository
  constructor(agentRepository: DTOAgentRepository) {
    this.agentRepository = agentRepository
  }
  
  async execute({ id, name, description, email }: EditAgent) {
    const agentToEdit = await this.agentRepository.edit({ id, name, description, email })
    return agentToEdit
  }

}
export {UpdateAgentUseCase}
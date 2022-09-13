import { AppError } from "../../../../shared/errors/AppError"
import { cleanEmptySpace } from "../../../../utils/cleanEmptySpace"
import { IAgentRepository, EditAgent } from "../../repositories/IAgentRepository"

class UpdateAgentUseCase{
  private agentRepository: IAgentRepository
  constructor(agentRepository: IAgentRepository) {
    this.agentRepository = agentRepository
  }
  
  async execute({id_agent_token, id, name, description, email, interests, skills, vocation, }) {
    if(id !== id_agent_token) throw new AppError("Token sent dont own the agent authenticate")
    const agentExist = await this.agentRepository.findById(id)
    if(!agentExist) throw new AppError('Agent not found')
    const cleanFields = cleanEmptySpace({ id, name, description, email, vocation })
    Object.assign(agentExist,cleanFields)  //asing agent without interest and  skills ara array and them cannot be clean by function clean empty 
    Object.assign(agentExist,{interests,skills})// here asing interest and skill and objec stay complete
    
    const agentToEdit = await this.agentRepository.edit(agentExist as EditAgent)

    return agentToEdit
  }

}
export {UpdateAgentUseCase}
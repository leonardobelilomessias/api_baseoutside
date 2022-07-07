import { dirname } from "path"
import { deleteFile } from "../../../../utils/file"
import { AgentRepository } from "../../Repository/AgentRepository"


interface ICreateImageProfile{
  user_id: string
  image_profile:string
}
class UpdateImageAgentUseCase{
  private agenteRepository: AgentRepository
  
   constructor(agentRepository: AgentRepository) {
   
    this.agenteRepository = agentRepository
 
  }
  async execute({ user_id, image_profile }: ICreateImageProfile): Promise<void> {
    
    const agent = await this.agenteRepository.findById({ id: user_id })
  
    if (agent.image_profile) {
      await deleteFile(`./tmp/Agent/ImageProfile/${agent.image_profile}`)
    }
    agent.image_profile = image_profile
   
    await this.agenteRepository.create(agent)
}
}

export{UpdateImageAgentUseCase}
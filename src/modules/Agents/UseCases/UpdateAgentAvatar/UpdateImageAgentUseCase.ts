import { dirname } from "path"
import { deleteFile } from "../../../../utils/file"
import { IStorageProvider } from "../../../../utils/providers/StorageProvider/IStorageProvide"
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"


interface ICreateImageProfile{
  id_agent: string
  image_profile:string
}
class UpdateImageAgentUseCase{
  private agenteRepository: AgentRepository
  private storageProvider:IStorageProvider
  
   constructor(agentRepository: AgentRepository,storageProvider:IStorageProvider) {
     this.agenteRepository = agentRepository
     this.storageProvider = storageProvider
  }
  async execute({ id_agent, image_profile }: ICreateImageProfile): Promise<void> {
    const agent = await this.agenteRepository.findById(id_agent )
    if (agent.image_profile) {
      await this.storageProvider.delete(agent.image_profile, "Agent")
      
    }
    await this.storageProvider.save(image_profile,"Agent")
    agent.image_profile = image_profile 
    await this.agenteRepository.create(agent)
  }
}

export{UpdateImageAgentUseCase}
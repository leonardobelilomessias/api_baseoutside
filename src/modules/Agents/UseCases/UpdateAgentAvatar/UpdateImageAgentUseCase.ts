import { AppError } from "../../../../shared/errors/AppError"
import { IStorageProvider } from "../../../../utils/providers/StorageProvider/IStorageProvide"
import { EditAgent, IAgentRepository } from "../../repositories/IAgentRepository"

interface ICreateImageProfile{
  id_agent: string
  image_profile:string
}
class UpdateImageAgentUseCase{
  private agenteRepository: IAgentRepository
  private storageProvider:IStorageProvider
     constructor(agentRepository: IAgentRepository,storageProvider:IStorageProvider) {
     this.agenteRepository = agentRepository
     this.storageProvider = storageProvider
  }
  async execute({ id_agent, image_profile }: ICreateImageProfile): Promise<EditAgent> {
    try{
      if(!id_agent||!image_profile) throw new AppError("Values can't be undefined.")
      const agent = await this.agenteRepository.findById(id_agent)
      if(!agent) throw new AppError("Agent not found.")
      if (agent.image_profile) {
        await this.storageProvider.delete(agent.image_profile, "Agent")
      }
       await this.storageProvider.save(image_profile,"Agent")
      const updateImageAgent = await this.agenteRepository.edit({image_profile:image_profile ,id:id_agent})
      return updateImageAgent
    }catch (err){
      console.log(err)
    }
  }
}

export{UpdateImageAgentUseCase}
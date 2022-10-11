import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { UpdateImageAgentController } from "./UpdateImageAgentController";
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase";

export default()=>{

  const agenteRepository = new AgentRepository()
  const storageProvider = new LocalStorageProvider()
  const updateImageAvatarUseCase = new UpdateImageAgentUseCase(agenteRepository,storageProvider)
  const updateImageAgentController = new UpdateImageAgentController(updateImageAvatarUseCase)
  return updateImageAgentController
}


import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "../../../../utils/providers/StorageProvider/implementations/S3StorageProvider";
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { UpdateImageAgentController } from "./UpdateImageAgentController";
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase";

export default()=>{

  const agenteRepository = new AgentRepository()
  const storageProvider = process.env.disk === "local" ? new LocalStorageProvider(): new S3StorageProvider()
  const updateImageAvatarUseCase = new UpdateImageAgentUseCase(agenteRepository,storageProvider)
  const updateImageAgentController = new UpdateImageAgentController(updateImageAvatarUseCase)
  return updateImageAgentController
}


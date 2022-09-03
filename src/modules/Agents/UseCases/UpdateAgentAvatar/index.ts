import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "../../../../utils/providers/StorageProvider/implementations/S3StorageProvider";
import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { UpdateImageAgentController } from "./UpdateImageAgentController";
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase";

const agenteRepository = new AgentRepository()
const storageProvider = new LocalStorageProvider()
const updateImageAvatarUseCase = new UpdateImageAgentUseCase(agenteRepository,storageProvider)
const updateImageAgentController = new UpdateImageAgentController(updateImageAvatarUseCase)

export{updateImageAgentController}
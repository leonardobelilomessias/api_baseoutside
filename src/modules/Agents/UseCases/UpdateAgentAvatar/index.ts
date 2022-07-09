import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "../../../../utils/providers/StorageProvider/implementations/S3StorageProvider";
import { AgentRepository } from "../../Repository/AgentRepository";
import { UpdateImageAgentController } from "./UpdateImageAgent";
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase";

const agenteRepository = new AgentRepository()
const storageProvider = new S3StorageProvider()
const updateImageAvatarUseCase = new UpdateImageAgentUseCase(agenteRepository,storageProvider)
const updateImageAgentController = new UpdateImageAgentController(updateImageAvatarUseCase)

export{updateImageAgentController}
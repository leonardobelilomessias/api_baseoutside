import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository";
import { UpdatePublicationAgentController } from "./UpdatePublicationAgentController";
import { UpdatePublicationAgentUseCase } from "./UpdatePublicationAgentUseCase";

const storagePovider = new LocalStorageProvider()
const photoPublicationAgentRepository = new PhotoPublicationAgentRepository(storagePovider)
const publicationsAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
const updatePublicationAgentUseCase = new UpdatePublicationAgentUseCase(publicationsAgentRepository)
const updatePublicationAgentController = new UpdatePublicationAgentController(updatePublicationAgentUseCase)

export{updatePublicationAgentController}
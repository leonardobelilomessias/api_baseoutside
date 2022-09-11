import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "../../../../utils/providers/StorageProvider/implementations/S3StorageProvider";
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository";
import { CreatePublicationAgentController } from "./CreatePublicationAgentController";
import { CreatePublicationAgentUseCase } from "./CreatePublicationAgentUseCase";

const localStorage = new S3StorageProvider()
const photoPublicationAgentRepository = new PhotoPublicationAgentRepository(localStorage)
const publicationAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
const createPublicationAgentUseCase = new CreatePublicationAgentUseCase(publicationAgentRepository)
const createPublicationAgentController = new CreatePublicationAgentController(createPublicationAgentUseCase)

export{ createPublicationAgentController}
import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationMissionRepository } from "../../infra/typeorm/repositories/PhotoPublicationMissionRepository";
import { PublicationMissionRepository } from "../../infra/typeorm/repositories/PublicationMissionRepository";
import { CreatePublicationMissionController } from "./CreatePublicationMissionController";
import { CreatePublicationMissionUseCase } from "./CreatePublicationMissionUseCase";

const storageProvider = new LocalStorageProvider()
const photosPublications = new PhotoPublicationMissionRepository(storageProvider)
const publicationMissionRepository = new PublicationMissionRepository(photosPublications)
const createPublicationMissionUseCase = new CreatePublicationMissionUseCase(publicationMissionRepository)
const createPublicationMissionController = new CreatePublicationMissionController(createPublicationMissionUseCase)
export{createPublicationMissionController}
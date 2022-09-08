import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationMissionRepository } from "../../infra/typeorm/repositories/PhotoPublicationMissionRepository";
import { PublicationMissionRepository } from "../../infra/typeorm/repositories/PublicationMissionRepository";
import { DeletePublicationMissionController } from "./DeletePublicationMissionController";
import { DeletePublicationMissionUseCase } from "./DeletePublicationMissionUseCase";



const storageProvider = new LocalStorageProvider()
const photoPublicationMissionRepository = new PhotoPublicationMissionRepository(storageProvider)
const publicationMissionRepository = new PublicationMissionRepository(photoPublicationMissionRepository)
const deletePublicationMissionUseCase = new DeletePublicationMissionUseCase(publicationMissionRepository)
const deletePublicationMissionController = new DeletePublicationMissionController(deletePublicationMissionUseCase)
export{deletePublicationMissionController}
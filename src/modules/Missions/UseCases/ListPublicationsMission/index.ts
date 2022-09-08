import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationMissionRepository } from "../../infra/typeorm/repositories/PhotoPublicationMissionRepository";
import { PublicationMissionRepository } from "../../infra/typeorm/repositories/PublicationMissionRepository";
import { ListPublicationsMissionUseCase } from "./ListPublicationsMission";
import { ListPublicationsMissionController } from "./ListPublicationsMissionController";

const storageProvider = new LocalStorageProvider()
const photoPublicationMissionRepository = new PhotoPublicationMissionRepository(storageProvider)
const publicationMissionRepository = new PublicationMissionRepository(photoPublicationMissionRepository)
const listPublicationMissionUseCase = new ListPublicationsMissionUseCase(publicationMissionRepository)
const listPublicationMissionController = new ListPublicationsMissionController(listPublicationMissionUseCase)

export{listPublicationMissionController}

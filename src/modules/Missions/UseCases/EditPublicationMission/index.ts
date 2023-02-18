import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationMissionRepository } from "../../infra/typeorm/repositories/PhotoPublicationMissionRepository";
import { PublicationMissionRepository } from "../../infra/typeorm/repositories/PublicationMissionRepository";
import { UpdateMissionController } from "../UpdateMission/UpdateMissionController";
import { UpdateMissionUseCase } from "../UpdateMission/UpdateMissionUseCase";
import { UpdatePublicationMissionController } from "./UpdatePublicationMissionController";
import { UpdatePublicationMissionUseCase } from "./UpdatePublicationMissionUseCase";

export default()=>{
    
    const storageProvider = new LocalStorageProvider()
    const photoPublicationMissionRepository = new PhotoPublicationMissionRepository(storageProvider)
    const publicationMissionRepository = new PublicationMissionRepository(photoPublicationMissionRepository)
    const updatePublicationMissionUseCase = new UpdatePublicationMissionUseCase(publicationMissionRepository)
    const updatePublicationMissionController = new UpdatePublicationMissionController(updatePublicationMissionUseCase)
    return updatePublicationMissionController
}
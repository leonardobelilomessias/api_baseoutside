import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider"
import { S3StorageProvider } from "../../../../utils/providers/StorageProvider/implementations/S3StorageProvider"
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository"
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository"
import { FetchPublicationAgentByIdController } from "./FetchPublicationAgentByIdContoller"
import { FetchPublicationAgentByIdUseCase } from "./FetchPublicationAgentByIdUseCase"


export default () => {
    const storageProvider = process.env.disk === "local" ? new LocalStorageProvider(): new S3StorageProvider()
    const photoPublicationAgentRepository = new PhotoPublicationAgentRepository(storageProvider)
    const publicationAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
    const fetchPublicationAgentByIdUseCase = new FetchPublicationAgentByIdUseCase(publicationAgentRepository)
    const fetchPublicationAgentByIdController = new FetchPublicationAgentByIdController(fetchPublicationAgentByIdUseCase)
    return fetchPublicationAgentByIdController
  
  }
  
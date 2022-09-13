import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { S3StorageProvider } from "../../../../utils/providers/StorageProvider/implementations/S3StorageProvider";
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent";
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository";
import { DeletePublicationAgentController } from "./DeletePublicationAgentController";
import { DeletePublicationAgentUseCase } from "./DeletePublicationAgentUseCase";



const storageProvider = process.env.disk === "local" ? new LocalStorageProvider(): new S3StorageProvider()
const photoPublicationAgentRepository = new PhotoPublicationAgentRepository(storageProvider)
const publicationAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
const deletePublicationAgentUseCase = new  DeletePublicationAgentUseCase(publicationAgentRepository)
const deletePublicationAgentController = new DeletePublicationAgentController(deletePublicationAgentUseCase)

export{deletePublicationAgentController}
import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PublicationAgent } from "../../infra/typeorm/entities/PublicationAgent";
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository";
import { DeletePublicationAgentController } from "./DeletePublicationAgentController";
import { DeletePublicationAgentUseCase } from "./DeletePublicationAgentUseCase";

const storageProvider = new LocalStorageProvider()
const photoPublicationAgentRepository = new PhotoPublicationAgentRepository(storageProvider)
const publicationAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
const deletePublicationAgentUseCase = new  DeletePublicationAgentUseCase(publicationAgentRepository)
const deletePublicationAgentController = new DeletePublicationAgentController(deletePublicationAgentUseCase)

export{deletePublicationAgentController}
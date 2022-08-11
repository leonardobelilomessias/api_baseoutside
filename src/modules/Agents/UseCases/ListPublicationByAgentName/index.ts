import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository";
import { ListPublicatonsByIdAgentController } from "./ListPublicationsByIdAgentController";
import { ListPublicationsByIdAgentUseCase } from "./ListPublicationsByIdAgentUseCase";


const storageProvider = new LocalStorageProvider()
const photosPublicationAgentRepository = new PhotoPublicationAgentRepository(storageProvider)
const publicationsAgentsRepository = new PublicationsAgentRepository(photosPublicationAgentRepository)
const listPublicatonsByIdAgentUseCase = new ListPublicationsByIdAgentUseCase(publicationsAgentsRepository)
const listPublicatonsByIdAgentController = new ListPublicatonsByIdAgentController(listPublicatonsByIdAgentUseCase)

export{listPublicatonsByIdAgentController}
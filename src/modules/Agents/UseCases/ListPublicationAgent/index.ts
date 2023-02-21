import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository";
import { ListPublicationAgentController } from "./ListPublicationAgentController";
import { ListPublicationAgentUseCase } from "./ListPublicationAgentUseCase";

export default()=>{

  const storageProvider = new LocalStorageProvider()
  const photoPublicationAgentRepository = new PhotoPublicationAgentRepository(storageProvider) 
  const publicationAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
  const listPublicationAgentUseCase = new ListPublicationAgentUseCase(publicationAgentRepository)
  const listPublicationAgentController = new ListPublicationAgentController(listPublicationAgentUseCase)
  return listPublicationAgentController
}


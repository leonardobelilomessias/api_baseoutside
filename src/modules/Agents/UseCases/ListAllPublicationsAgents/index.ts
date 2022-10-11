import { LocalStorageProvider } from "../../../../utils/providers/StorageProvider/implementations/LocalStorageProvider";
import { PhotoPublicationAgentRepository } from "../../infra/typeorm/repositories/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository";
import { ListAllPublicationsAgentsController } from "./ListAllPublicationsAgentsController";
import { ListAllPublicationsAgentsUseCase } from "./ListAllPublicationsAgentsUseCase";

export default()=>{
  const storageProvider = new LocalStorageProvider()
  const photoPublicationAgentRepository = new PhotoPublicationAgentRepository(storageProvider)
  const publicationsAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
  const listAllPublicationsAgentsUseCase = new ListAllPublicationsAgentsUseCase(publicationsAgentRepository)
  const listAllPublicationsAgentsController = new ListAllPublicationsAgentsController(listAllPublicationsAgentsUseCase)
  return listAllPublicationsAgentsController
}




import { PublicationAgent } from "../../Entities/PublicationAgent";
import { PhotoPublicationAgentRepository } from "../../Repository/PhotosPublicationAgentRepository";
import { PublicationsAgentRepository } from "../../Repository/PublicationsAgentRepository";
import { CreatePublicationAgentController } from "./CreatePublicationAgentController";
import { CreatePublicationAgentUseCase } from "./CreatePublicationAgentUseCase";

const photoPublicationAgentRepository = new PhotoPublicationAgentRepository()
const publicationAgentRepository = new PublicationsAgentRepository(photoPublicationAgentRepository)
const createPublicationAgentUseCase = new CreatePublicationAgentUseCase(publicationAgentRepository)
const createPublicationAgentController = new CreatePublicationAgentController(createPublicationAgentUseCase)

export{ createPublicationAgentController}
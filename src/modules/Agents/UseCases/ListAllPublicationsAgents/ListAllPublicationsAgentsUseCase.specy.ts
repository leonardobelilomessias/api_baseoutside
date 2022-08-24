import { IPhotosPublicationAgent } from "../../DTOS/IPhotosPublicationAgentRepository"
import { IPublicationsAgentRepository } from "../../DTOS/IPublicationsAgentRepository"
import { PublicationsAgentRepositoryInMemory } from "../../RepositoryInMemory/PublicationAgentRepositoryInMemory"
import { ListAllPublicationsAgentsUseCase } from "./ListAllPublicationsAgentsUseCase"

let publicationsAgentRepository: IPublicationsAgentRepository
let listAllPublicationsAgentsUseCase: ListAllPublicationsAgentsUseCase 
let photoPublicationAgentRepository :IPhotosPublicationAgent

describe("List All Publications Agents", () => {
  beforeEach(() => {
    publicationsAgentRepository = new PublicationsAgentRepositoryInMemory(photoPublicationAgentRepository)
    listAllPublicationsAgentsUseCase = new ListAllPublicationsAgentsUseCase(publicationsAgentRepository)
  })
  it("should be able list all publication", async () => {

    const allPublications = await listAllPublicationsAgentsUseCase.execute()
    expect(allPublications).toEqual([])
  })
})
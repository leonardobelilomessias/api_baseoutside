import { PublicationsAgentRepository } from "../../infra/typeorm/repositories/PublicationsAgentRepository"
import { PhotosPublicationAgentInMemory } from "../../RepositoryInMemory/PhotoPublicationAgentInMemory"
import { PublicationsAgentRepositoryInMemory } from "../../RepositoryInMemory/PublicationAgentRepositoryInMemory"
import { CreatePublicationAgentUseCase } from "./CreatePublicationAgentUseCase"

let publicationAgentRepository: PublicationsAgentRepositoryInMemory
let createPublicationAgentUseCase: CreatePublicationAgentUseCase
let photoPublicationAgentRepositoryInMemory : PhotosPublicationAgentInMemory
describe("Create Publication Agent", () => {
  beforeEach(() => {
    photoPublicationAgentRepositoryInMemory = new PhotosPublicationAgentInMemory()
    publicationAgentRepository = new PublicationsAgentRepositoryInMemory(photoPublicationAgentRepositoryInMemory)
    createPublicationAgentUseCase = new CreatePublicationAgentUseCase(publicationAgentRepository)
  })
  it("Should be able to create a new publication", async () => {
    const newPublication = await createPublicationAgentUseCase.execute(
      {
        id_agent: '01',
        type: 'photo',
        description: 'teste',
        content: ["./tmp/sendPhotos/01.jpg"]
      })
    expect(newPublication.id_agent).toEqual('01')
  })
})
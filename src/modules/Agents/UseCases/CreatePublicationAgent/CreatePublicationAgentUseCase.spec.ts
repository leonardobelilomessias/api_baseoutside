import { PhotosPublicationAgentInMemory } from "../../RepositoryInMemory/PhotoPublicationAgentInMemory"
import { PublicationsAgentRepositoryInMemory } from "../../RepositoryInMemory/PublicationAgentRepositoryInMemory"
import { CreatePublicationAgentUseCase } from "./CreatePublicationAgentUseCase"

let publicationsAgentRepositoryInMemory: PublicationsAgentRepositoryInMemory
let createPublicationAgentUseCase: CreatePublicationAgentUseCase
let photosPublicationAgentInMemory :PhotosPublicationAgentInMemory


describe("Create publication agent", () => {
  beforeEach(() => {
    photosPublicationAgentInMemory = new PhotosPublicationAgentInMemory()
    publicationsAgentRepositoryInMemory = new PublicationsAgentRepositoryInMemory(photosPublicationAgentInMemory)
    createPublicationAgentUseCase = new CreatePublicationAgentUseCase(publicationsAgentRepositoryInMemory)
  })
  it("shold be able create a new publication", async () => {
    const requestPublication = {
      id_agent: "6555ee45-21f2-43ca-8a70-9782111550aa",
      type: "photo",
      desciption: "Minha primeira ação",
      content:["phot01","photo2"]
    }
    const newPublication =await  createPublicationAgentUseCase.execute({
      id_agent: requestPublication.id_agent,
      type: requestPublication.type,
      description:requestPublication.desciption,
      content:requestPublication.content
    })
    console.log(newPublication)
    expect(newPublication).toHaveProperty("id_publication")
  })
  
})
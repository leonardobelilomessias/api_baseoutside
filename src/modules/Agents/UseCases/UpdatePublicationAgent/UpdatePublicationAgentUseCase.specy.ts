import { AppError } from "../../../../shared/errors/AppError"
import { IPhotosPublicationAgent } from "../../DTOS/IPhotosPublicationAgentRepository"
import { IPublicationsAgentRepository } from "../../DTOS/IPublicationsAgentRepository"
import { PhotosPublicationAgentInMemory } from "../../RepositoryInMemory/PhotoPublicationAgentInMemory"
import { PublicationsAgentRepositoryInMemory } from "../../RepositoryInMemory/PublicationAgentRepositoryInMemory"
import { CreatePublicationAgentUseCase } from "../CreatePublicationAgent/CreatePublicationAgentUseCase"
import { UpdatePublicationAgentUseCase } from "./UpdatePublicationAgentUseCase"

let updatePublicationAgentUseCase: UpdatePublicationAgentUseCase
let publicationsAgentRepository: IPublicationsAgentRepository
let photoPublicationAgent: IPhotosPublicationAgent
let createPublicationAgentUseCase:CreatePublicationAgentUseCase

describe('Update Publication Agent', () => {
  beforeEach(() => {
    photoPublicationAgent = new PhotosPublicationAgentInMemory()
    publicationsAgentRepository = new PublicationsAgentRepositoryInMemory(photoPublicationAgent)
    createPublicationAgentUseCase = new CreatePublicationAgentUseCase(publicationsAgentRepository)
    updatePublicationAgentUseCase = new UpdatePublicationAgentUseCase(publicationsAgentRepository)
    
  })

  it("shouldn't be able update a publication agent invalid id publication",async  () => {
    expect(async () => {
      await updatePublicationAgentUseCase.execute("01",'oi')
    }).rejects.toBeInstanceOf(AppError)
  })
  it('should be able update a publication', async () => {
    const newPublication = await createPublicationAgentUseCase.execute(
      {
        id_agent: '01',
        type: 'photo',
        description: 'teste',
        content: ["./tmp/sendPhotos/01.jpg"]
      })
      const updatePublication = await updatePublicationAgentUseCase.execute(newPublication.id_publication, 'updateDescription publication')
    expect(updatePublication.description).toBe('updateDescription publication')
    

  })
})
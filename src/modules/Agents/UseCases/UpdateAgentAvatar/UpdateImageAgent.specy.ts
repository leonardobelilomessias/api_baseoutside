import { StorageTestProvider} from "../../../../utils/providers/StorageProvider/implementations/StorageTestProvides"
import { IStorageProvider } from "../../../../utils/providers/StorageProvider/IStorageProvide"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { UpdateImageAgentUseCase } from "./UpdateImageAgentUseCase"

let agenteRepository: IAgentRepository
let updateImageAgentUseCase: UpdateImageAgentUseCase
let storageTestProvider:IStorageProvider

describe("Update image agent", () => {
  beforeEach(() => {
    agenteRepository = new AgentInMemoryRepository()
    storageTestProvider = new StorageTestProvider()
    updateImageAgentUseCase = new UpdateImageAgentUseCase(agenteRepository,storageTestProvider)
  })
  it("should be able update a image of a agent ",async () => {
    const agent = await agenteRepository.create({ name: 'agentImageUpdate', email: "agentImageUpdate@email", password: 'xxx' ,user_name:"neoagent"})
    const image_profile=  "./tmp/sendPhotos/01.jpg"
    await updateImageAgentUseCase.execute({ id_agent: agent.id, image_profile })
    await updateImageAgentUseCase.execute({ id_agent: agent.id, image_profile })
    await updateImageAgentUseCase.execute({ id_agent: agent.id, image_profile })

    const foundAgent = await agenteRepository.findById(agent.id)
    
    expect(agent.image_profile).toEqual(foundAgent.image_profile)

  })
})
import { AppError } from "../../../../shared/errors/AppError"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { ColabAgentRepositoryInMemory } from "../../RepositoryInMemory/ColabAgentRepositoryInMemory"
import { CreateColabAgentUseCase } from "./CreateColabUseCase"

let colabAgentRepositoryInMemory: ColabAgentRepositoryInMemory
let createColabUseCase: CreateColabAgentUseCase
let agentRepositoryInMemory:AgentInMemoryRepository
describe("Create Colab ", () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository()
    colabAgentRepositoryInMemory = new ColabAgentRepositoryInMemory(agentRepositoryInMemory)
    createColabUseCase = new CreateColabAgentUseCase(colabAgentRepositoryInMemory,agentRepositoryInMemory)
  })
  it("should be able create a new colab", async () => {
    const newColab = await createColabUseCase.execute({ id_agent: '01', id_colab: '02', type: 0 })
    expect(newColab).toEqual(newColab)
  })
  it("shouldn't be able create a new colab with invalid fild ", async () => {
    expect(async () => {
      await createColabUseCase.execute({ id_agent: '', id_colab: '', type: 0 })
     }).rejects.toBeInstanceOf(AppError)

  })
  it("shouldn't be able create a repeat colab", async () => {
    expect(async () => {
      const newColab = await createColabUseCase.execute({ id_agent: '01', id_colab: '02', type: 0 })
      const newColab2 = await createColabUseCase.execute({ id_agent: '01', id_colab: '02', type: 0 })
    }).rejects.toBeInstanceOf(AppError)

  })
})
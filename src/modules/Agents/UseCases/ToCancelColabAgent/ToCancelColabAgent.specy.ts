import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { ColabAgentRepositoryInMemory } from "../../RepositoryInMemory/ColabAgentRepositoryInMemory"
import { ToCancelColabAgentUseCase } from "./ToCancelColabAgentUseCase"

let colabAgentInMemory: ColabAgentRepositoryInMemory
let toCancelColabAgentUseCase: ToCancelColabAgentUseCase
let agentRepositoryInMemory:AgentInMemoryRepository

describe("To Cancel colab", () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository()
    colabAgentInMemory = new ColabAgentRepositoryInMemory(agentRepositoryInMemory)
    toCancelColabAgentUseCase = new ToCancelColabAgentUseCase(colabAgentInMemory)
  })
  it("shold be cancel a colab agent", async () => {
    const newColab = await colabAgentInMemory.create({id_agent:'01',id_colab:'02',type:0})
    const canceledColab = await toCancelColabAgentUseCase.execute({ id_agent: '01', id_colab: '02' })
    expect(newColab).toEqual(canceledColab)
  })
})
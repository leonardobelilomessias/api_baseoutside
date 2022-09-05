import { AppError } from "../../../../shared/errors/AppError"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { DeactivateAgentUseCase } from "./DeactivateAgentUseCase"

let agentRepository: IAgentRepository
let deactivateAgentUseCase:DeactivateAgentUseCase

describe("Deactivate a agent", () => {
  beforeEach(() => {
    agentRepository = new AgentInMemoryRepository()
    deactivateAgentUseCase = new DeactivateAgentUseCase(agentRepository) 
  })
  it("Shouldn't be able deactivate a agentwith invalid id", async () => {
    expect(async () => {
      const id = "3"
      await deactivateAgentUseCase.execute(id)
    }).rejects.toBeInstanceOf(AppError)
  })

  it("Shound be able deactivate a agent", async () => {
    const agentActive = await agentRepository.create({ name: "agent Active", email: "agentactive@email", password: "xxx",user_name:"neoagent" })
    const deactivateAgent = await agentRepository.deactivate(agentActive.id)
    expect(deactivateAgent.is_active).toBe(false)
  })
})
  
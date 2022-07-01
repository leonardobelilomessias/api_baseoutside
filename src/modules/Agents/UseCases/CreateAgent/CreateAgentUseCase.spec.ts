import { AppError } from "../../../../errors/AppError"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { CreateAgentUseCase } from "./CreateAgentUseCase"
let agentRepositoryInMemory :AgentInMemoryRepository
let createAgentUseCase: CreateAgentUseCase
describe("Create agent", () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository
    createAgentUseCase = new CreateAgentUseCase(agentRepositoryInMemory)
  })
  it("should be able create a new agent ", async () => {
    const agent = {
      name: "Test",
      email: "email@test.com",
      password: "123",
    }
    await createAgentUseCase.execute({
      name: agent.name,
      email: agent.email,
      password: agent.password,
    })
    const agentCreated = await agentRepositoryInMemory.findByEmail({ email: agent.email })
    
    expect(agentCreated).toHaveProperty("id")
  })

  it("shouldn't be able create a new agent with same name ", async () => {
    expect(async () => {
      const agent = {
        name: "Test",
        email: "email@test.com",
        password: "123",
      }
      await createAgentUseCase.execute({
        name: agent.name,
        email: agent.email,
        password: agent.password,
      })
      await createAgentUseCase.execute({
        name: agent.name,
        email: agent.email,
        password: agent.password,
      })

    }).rejects.toBeInstanceOf(AppError)
    
    
  })
})
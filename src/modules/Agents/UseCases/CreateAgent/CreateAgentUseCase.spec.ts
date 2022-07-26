import { Agent } from "../../Entities/Agent"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { DTOAgentRepository } from "../../RepositoryInMemory/DTOAgentRepository"
import { CreateAgentUseCase } from "./CreateAgentUseCase"

let agentRepository:  AgentInMemoryRepository
let createAgentUseCase: CreateAgentUseCase
describe("create a new agent", () => {
  beforeEach(() => {
    agentRepository = new AgentInMemoryRepository()
    createAgentUseCase = new CreateAgentUseCase(agentRepository)
  })
  it("should be create a new agent",async  () => {
    
    const agent = new Agent()
    Object.assign(agent, { email: "leonardo@email", password: '123' })
    const newAgent = await createAgentUseCase.execute(agent)

    expect(newAgent).toHaveProperty("id")
  })
})
import { AppError } from "../../../errors/AppError"
import { AgentInMemoryRepository } from "../../Agents/RepositoryInMemory/AgentInMemoryRepository"
import { CreateAgentUseCase } from "../../Agents/UseCases/CreateAgent/CreateAgentUseCase"
import { AuthenticateAgentUseCase } from "./AuthenticateAgentUseCase"
let agentRepositoryInMemory :AgentInMemoryRepository
let createAgentUseCase: CreateAgentUseCase
let authenticateAgentUseCase:AuthenticateAgentUseCase
describe("Authenticate Agent",  () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository
    authenticateAgentUseCase = new AuthenticateAgentUseCase(agentRepositoryInMemory)
    createAgentUseCase = new CreateAgentUseCase(agentRepositoryInMemory)
  })
  it("should be able authenticate user", async () => {
    const agent = {
      name: "Test",
      email: "test@test.com",
      password:"123"
    }
    const newAgent = await createAgentUseCase.execute({name:agent.name,email:agent.email,password:agent.password})

    const agentAuthenticated = await authenticateAgentUseCase.execute({email:agent.email,password:agent.password})

    expect(agentAuthenticated).toHaveProperty("token")
  })
  it("sholdn't able atuthenticate user",() => {
    expect(async () => {
      const agent = {
        name: "Test",
        email: "test@test.com",
        password:"123"
      }
      const newAgent = await createAgentUseCase.execute({name:agent.name,email:agent.email,password:agent.password})
      const result = await authenticateAgentUseCase.execute({ email: "false", password: newAgent.password })
    }).rejects.toBeInstanceOf(AppError)
  })
  it("sholdn't able create a agent with incorrect password", () => {
    expect(async () => {
      const agent = {
        name: "Test",
        email: "test@test.com",
        password:"123"
      }
      const newAgent = await createAgentUseCase.execute({name:agent.name,email:agent.email,password:agent.password})
      const result = await authenticateAgentUseCase.execute({ email: newAgent.email, password: "incorrect" })
    }).rejects.toBeInstanceOf(AppError)
  })
})
import { AppError } from "../../../shared/errors/AppError"
import { password } from "../../../shared/infra/http/Routes/password.routes"
import { AgentRepository } from "../../agents/infra/typeorm/repositories/AgentRepository"
import { IAgentRepository } from "../../agents/repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../agents/RepositoryInMemory/AgentInMemoryRepository"
import { CreateAgentUseCase } from "../../agents/UseCases/CreateAgent/CreateAgentUseCase"
import { IAgentTokenRepository } from "../userToken/repositories/IAgentTokenRepository"
import { AgentTokenRepositoryInMemory } from "../userToken/repositories/RepositoryInmemory/AgentTokenRepositoryInmemory"
import { AuthenticateAgentUseCase } from "./AuthenticateAgentUseCase"

let createAgentUseCase: CreateAgentUseCase
let agentTokenRepositoryInMemory: IAgentTokenRepository
let agentRepositoryInMemory:IAgentRepository
let authenticateAgentUseCase:AuthenticateAgentUseCase
describe("Authenticate Agent", () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository()
    agentTokenRepositoryInMemory = new AgentTokenRepositoryInMemory()
    createAgentUseCase = new CreateAgentUseCase(agentRepositoryInMemory)
    authenticateAgentUseCase = new AuthenticateAgentUseCase(agentRepositoryInMemory,agentTokenRepositoryInMemory)

  })
  it("should be able authenticate a agent", async () => {
    const createAgent = {
      email: 'leo@email',
      name: "leo",
      password:"123"
    }
    await createAgentUseCase.execute(createAgent)

    const login = {
      email: "leo@email",
      password:'123'
    }

    const isAuthenticate = await authenticateAgentUseCase.execute(login)
    expect(isAuthenticate).toHaveProperty("token")

  })
  it("shouldn't be able authenticate a no existent agent", async () => {
    
    expect(async () => {
          const createAgent = {
      email: 'leo@email',
      name: "leo",
      password:"123"
    }
    await createAgentUseCase.execute(createAgent)
    await authenticateAgentUseCase.execute({ email: "le@email", password: '123' })
    }).rejects.toBeInstanceOf(AppError)
  })
  it("shouldn't be able authenticate with incorrect password", async () => {
    

    expect(async () => {
      const createAgent = {
        email: 'leo@email',
        name: "leo",
        password:"123"
      }
      await createAgentUseCase.execute(createAgent)
      await authenticateAgentUseCase.execute({ email: "le@email", password: '123' })
    }).rejects.toBeInstanceOf(AppError)

  })
})
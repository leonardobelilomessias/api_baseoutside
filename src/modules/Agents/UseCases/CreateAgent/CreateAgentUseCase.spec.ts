import { AppError } from "../../../../shared/errors/AppError"
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { CreateAgentUseCase } from "./CreateAgentUseCase"

let agentRepositoryInmemory: IAgentRepository
let createAgentUseCase: CreateAgentUseCase

describe("create agent", () => {
  beforeEach(() => {
    agentRepositoryInmemory = new AgentInMemoryRepository()
    createAgentUseCase = new CreateAgentUseCase(agentRepositoryInmemory)
  })
  it("should be able to create a new profile", async () => {
    const requestAgent = {
      email: 'leonardo@email',
      password: "123",
      name:"leo"
    }
    const newAgent = await createAgentUseCase.execute(requestAgent)
    const findAgent = await agentRepositoryInmemory.findByEmail({ email: requestAgent.email })
    expect(findAgent).toHaveProperty("id")
    expect(newAgent).toHaveProperty("id")
  })

  it("shouldn't be able to create a new profile with email already exists", async () => {
    expect(async () => {
      const requestAgent = {
        email: 'leonardo@email',
        password: "123",
        name:"leo"
      }
      await createAgentUseCase.execute({email:requestAgent.email,password:requestAgent.password,name:requestAgent.name})
      await createAgentUseCase.execute({email:requestAgent.email,password:requestAgent.password,name:requestAgent.name})
  
   }).rejects.toBeInstanceOf(AppError)


  })
})
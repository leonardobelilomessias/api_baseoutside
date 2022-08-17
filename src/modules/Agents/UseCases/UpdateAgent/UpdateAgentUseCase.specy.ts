import { AppError } from "../../../../shared/errors/AppError"
import { EditAgent, IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { UpdateAgentUseCase } from "./UpdateAgentUseCase"

let agentRepository: IAgentRepository
let updateAgentUseCase : UpdateAgentUseCase

describe("Update a agent", () => {
  beforeEach(() => {
    agentRepository = new AgentInMemoryRepository()
    updateAgentUseCase = new UpdateAgentUseCase(agentRepository)
  })
  it("Should be able update a agent", async () => {
    const agent = await agentRepository.create({ name: 'agent', email: "agen@email", password: "xxx" })
    Object.assign(agent, { skills: ['leader'], interests: ['nature'],vocation:'Tecnology',description:"'I'm valid  a updated agent" })
    const updateAgent = await updateAgentUseCase.execute(agent as EditAgent)
    expect(updateAgent.description).toEqual("'I'm valid  a updated agent")
  })
  it("Should't be able update a agent with not found id", async () => {
    expect(async() => {
      
    const agent = await agentRepository.create({ name: 'agent', email: "agen@email", password: "xxx" })
    const invalidUpdateAgent = {
      id: 'n0t3x15t',
      skills: ['leader'],
      interests: ['nature'],
      vocation: 'Tecnology',
      description: "'I'm a invalid updated agent"
    }
    const updateAgent = await updateAgentUseCase.execute( invalidUpdateAgent as EditAgent)

    }).rejects.toBeInstanceOf(AppError)
  })
})
import { IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { FindAgentByNameUseCase } from "./FindAgentByNameUseCase"

let agentRepository: IAgentRepository
let findAgentByNameUseCase : FindAgentByNameUseCase
describe("Find Agent By name", () => {
  beforeEach(() => {
    agentRepository = new AgentInMemoryRepository()
    findAgentByNameUseCase = new FindAgentByNameUseCase(agentRepository)
  })
  it("Should be able agent by name", async () => {
/*     const newAgent = agentRepository.create() */
    const name = 'Leonardo'
    const agent = await findAgentByNameUseCase.execute(name)
    expect(agent).toBe(undefined)
  })
  it("Should be able agent by name", async () => {
    const newAgent = await agentRepository.create({ name: 'agent', email: 'agent@email', password: '123',user_name:"neoagent" }) 
    const agent = await findAgentByNameUseCase.execute(newAgent.name)
    expect(agent).toEqual(newAgent)
    })
})
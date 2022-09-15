import { IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"

let agentRepository: IAgentRepository
describe("List all agents", () => {
  beforeEach(() => {
    agentRepository = new AgentInMemoryRepository()
  })
  it("should be able list ", async () => {
    const agent = await agentRepository.create({name:"agent",email:"agent@email",password:"XXX",user_name:"neoagent"})
    const agents = await agentRepository.listAll()
    expect(agents).toEqual([agent])
  })
})
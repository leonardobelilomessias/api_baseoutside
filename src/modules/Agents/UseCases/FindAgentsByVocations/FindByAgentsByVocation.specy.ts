import { IAgentRepository } from "../../repositories/IAgentRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { FindAgentsByVocationUseCase } from "./FindAgentsByVocationUseCase"

let agentRepository: IAgentRepository
let findAgentsByVocations:FindAgentsByVocationUseCase

describe("FindAgentsByVocations", () => {
  beforeEach(() => {
    agentRepository = new AgentInMemoryRepository()
    findAgentsByVocations = new FindAgentsByVocationUseCase(agentRepository)
  })
  it("Should able be Find Agent by vocation", async () => {
    const agent = await agentRepository.create({ name: "agent", email: "agent@email", password: "xxx",user_name:"neoagent" })
    await agentRepository.edit({id:agent.id,vocation:'sociology'})
    const agents = await findAgentsByVocations.execute({ vocation: 'sociology' })
    expect(agents[0].vocation).toBe('sociology')
  })
  it("Should able be Find Agent by vocation", async () => {
    const agent = await agentRepository.create({ name: "agent", email: "agent@email", password: "xxx",user_name:"neoagent" })
    await agentRepository.edit({id:agent.id,vocation:'tecnology',name: "agent", email: "agent@email"})
    const agents = await findAgentsByVocations.execute({ vocation: 'sociology' })
    expect(agents).toEqual([])
  })
})
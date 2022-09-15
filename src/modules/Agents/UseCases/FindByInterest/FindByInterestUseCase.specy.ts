import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../repositories/IInterestsRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { InterestsRepositoryInMemory } from "../../RepositoryInMemory/InterestsRepositoryInMemory"
import { FindAgentsByInterestUseCase } from "./FindByInterestUseCase"

let findAgentsByinterestsUseCase: FindAgentsByInterestUseCase
let agentRepositoryInMemory: IAgentRepository
let interestsRepositoryInMemory: IInterestsRepository
describe("Find by interests", () => {
  beforeAll(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository()
    interestsRepositoryInMemory = new InterestsRepositoryInMemory(agentRepositoryInMemory)
    findAgentsByinterestsUseCase = new FindAgentsByInterestUseCase(interestsRepositoryInMemory)
  })
  it("should be able find agent by interests", async () => {
    const agent = await agentRepositoryInMemory.create({ name: "agent", email: 'agent@email', password: "xxx",user_name:"neoagent" })
    await interestsRepositoryInMemory.updateInterests(agent.id, ['programing'],)
    const agents = await findAgentsByinterestsUseCase.execute('programing')
    expect(agents).toEqual([agent])
  })
})
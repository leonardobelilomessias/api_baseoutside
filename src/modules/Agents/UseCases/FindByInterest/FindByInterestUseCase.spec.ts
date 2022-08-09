import { IAgentRepository } from "../../repositories/IAgentRepository"
import { IInterestsRepository } from "../../repositories/IInterestsRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { InterestsRepositoryInMemory } from "../../RepositoryInMemory/InterestsRepositoryInMemory"
import { FindAgentsByInterestUseCase } from "./FindByInterestUseCase"

let findAgentsByinterestsUseCase: FindAgentsByInterestUseCase
let agentRepositoryInMemory: IAgentRepository
let interestsRepositoryInMemory: IInterestsRepository
describe("Find by interests", () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository()
    interestsRepositoryInMemory = new InterestsRepositoryInMemory()
    findAgentsByinterestsUseCase = new FindAgentsByInterestUseCase(interestsRepositoryInMemory, agentRepositoryInMemory)
  })
  it("should be able find agent by interests", async () => {
    const agent = await agentRepositoryInMemory.create({ name: "agent", email: 'agent@email', password: "xxx" })
    await interestsRepositoryInMemory.updateInterests(agent.id,['programing', 'desing'],)
    const agents = await findAgentsByinterestsUseCase.execute(['programing'])
    expect(agents).toEqual([agent])
  })
})
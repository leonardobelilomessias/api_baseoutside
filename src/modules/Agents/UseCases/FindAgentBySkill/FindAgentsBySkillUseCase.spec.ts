import { IAgentRepository } from "../../repositories/IAgentRepository"
import { ISkillsRepository } from "../../repositories/ISkillsRepository"
import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { SkillsRepositoryInMemory } from "../../RepositoryInMemory/SkillsRepositoryInmemory"
import { FindAgentsBySkillsUseCase } from "./FindAgentBySkillUseCase"

let findAgentsBySkillsUseCase: FindAgentsBySkillsUseCase
let agentRepositoryInMemory: IAgentRepository
let skillsRepositoryInMemory: ISkillsRepository

describe("Find agents by skills", () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository()
    skillsRepositoryInMemory = new SkillsRepositoryInMemory()
    findAgentsBySkillsUseCase = new FindAgentsBySkillsUseCase(agentRepositoryInMemory,skillsRepositoryInMemory)
  })
  it("Should be able find agents by skills", async () => {
    const agent = await agentRepositoryInMemory.create({ name: "agent", email: 'agent@email', password: "xxx" })
    await skillsRepositoryInMemory.updateSkillsAgent(['programing', 'desing'],agent.id)
    const agents = await findAgentsBySkillsUseCase.execute(['programing'])
    const foundAgent = await agentRepositoryInMemory.findById(agents[0])
   expect(foundAgent.id).toEqual(agents[0])
  })
})
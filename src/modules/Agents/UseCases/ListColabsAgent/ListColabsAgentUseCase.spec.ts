import { AgentInMemoryRepository } from "../../RepositoryInMemory/AgentInMemoryRepository"
import { ColabAgentRepositoryInMemory } from "../../RepositoryInMemory/ColabAgentRepositoryInMemory"
import { ListColabsAgentUseCase } from "./ListColabsAgentUseCase"

let colabAgentInMemory: ColabAgentRepositoryInMemory
let agentRepositoryInMemory:AgentInMemoryRepository
let listColabsAgentUseCase:ListColabsAgentUseCase

describe("List Colabs Agent", () => {
  beforeEach(() => {
    agentRepositoryInMemory = new AgentInMemoryRepository()
    colabAgentInMemory = new ColabAgentRepositoryInMemory(agentRepositoryInMemory)
    listColabsAgentUseCase = new ListColabsAgentUseCase(colabAgentInMemory)
  })

  it("Should be able list all colabs agents", async () => {
    const agent1 = await agentRepositoryInMemory.create({ name: "agent1", email: "agent1@email", password: 'xxx',user_name:"neoagent" })
    const agent2 = await agentRepositoryInMemory.create({ name: "agent2", email: "agent2@email", password: 'xxx',user_name:"neoagent" })
    const agent3 = await agentRepositoryInMemory.create({ name: "agent3", email: "agent3@email", password: 'xxx',user_name:"neoagent" })
    const colab1 = await colabAgentInMemory.create({ id_agent: agent1.id, id_colab: agent2.id, type: 0 })
    const colab2 = await colabAgentInMemory.create({id_agent:agent1.id,id_colab:agent3.id,type:0})
    const colab3 = await colabAgentInMemory.create({ id_agent: agent3.id, id_colab: agent2.id, type: 0 })
    const colabsAgent1 = await listColabsAgentUseCase.execute(agent1.id) 
    expect(colabsAgent1).toEqual([agent2,agent3])


  })
})
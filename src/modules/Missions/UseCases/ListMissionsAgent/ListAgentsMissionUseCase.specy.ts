import { AppError } from "../../../../shared/errors/AppError"
import { AgentsMissionsRepositoryInMemory } from "../../RepositoryInMemory/AgentsMissionsRepositoryInMemory"
import { ListMissionsAgentUseCase } from "./ListMissionsAgentUseCase"


let listMissionsAgentUseCase: ListMissionsAgentUseCase
let agentsMissionsRepositoryInMemory: AgentsMissionsRepositoryInMemory

describe("List Missions agent", () => {
  beforeEach(() => {
    agentsMissionsRepositoryInMemory = new AgentsMissionsRepositoryInMemory()
    listMissionsAgentUseCase = new ListMissionsAgentUseCase(agentsMissionsRepositoryInMemory)
  })
  it("shouldn't be able list agent with invalid value mission",async () => {
    expect(async () => {
      await listMissionsAgentUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })

  it("sholdn't be able list agents of mission not found", async () => {
    expect(async () => {
      await listMissionsAgentUseCase.execute("151")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able list Agents of a mission", async () => {
    const mission = await agentsMissionsRepositoryInMemory.create({ id_agent: '01', id_mission: "02" })
    const listAgentsMission = await listMissionsAgentUseCase.execute("01")
    expect(listAgentsMission[0].id_mission).toBe("02")
  })
})
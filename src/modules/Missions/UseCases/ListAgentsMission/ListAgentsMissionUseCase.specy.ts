import { AppError } from "../../../../shared/errors/AppError"
import { AgentsMissionsRepositoryInMemory } from "../../RepositoryInMemory/AgentsMissionsRepositoryInMemory"
import { ListAgentsMissionUseCase } from "./ListAgentsMissionUseCase"

let listAgentsMissionUseCase: ListAgentsMissionUseCase
let agentsMissionsRepositoryInMemory:AgentsMissionsRepositoryInMemory

describe("List Agents Mission", () => {
  beforeEach(() => {
    agentsMissionsRepositoryInMemory = new AgentsMissionsRepositoryInMemory()
    listAgentsMissionUseCase = new ListAgentsMissionUseCase(agentsMissionsRepositoryInMemory)
  })
  it("shouldn't be able list agent with invalid value mission",async () => {
    expect(async () => {
      await listAgentsMissionUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)
  })

  it("sholdn't be able list agents of mission not found", async () => {
    expect(async () => {
      await listAgentsMissionUseCase.execute("151")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able list Agents of a mission", async () => {
    const mission = await agentsMissionsRepositoryInMemory.create({ id_agent: '01', id_mission: "02" })
    const listAgentsMission = await listAgentsMissionUseCase.execute("02")
    expect(listAgentsMission[0].id_agent).toBe("01")
  })
})
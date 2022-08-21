import { AppError } from "../../../../shared/errors/AppError"
import { AgentsMissionsRepositoryInMemory } from "../../RepositoryInMemory/AgentsMissionsRepositoryInMemory"
import { DeleteAgentMissionUseCase } from "./DeleteAgentMissionUseCase"

let agentsMissionRepositoryInMemory  : AgentsMissionsRepositoryInMemory
let deleteAgentMissionUseCase:DeleteAgentMissionUseCase

describe("Delete agent missin", () => {
  beforeEach(() => {
    agentsMissionRepositoryInMemory = new AgentsMissionsRepositoryInMemory()
    deleteAgentMissionUseCase = new DeleteAgentMissionUseCase(agentsMissionRepositoryInMemory)
  })
  it("shouldn't be able delete agent with invalid id", async () => {
    expect(async () => {
      await  deleteAgentMissionUseCase.execute("","")
    }).rejects.toBeInstanceOf(AppError)
  })

  it("Shouldn't be able delete agent mission not found", async () => {
    expect(async () => {
      await deleteAgentMissionUseCase.execute("055", "005")
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able delete a agent mission", async () => {
    const agentMission = await agentsMissionRepositoryInMemory.create({id_agent:"01",id_mission:"02"})

    const deletedAgentMission = await deleteAgentMissionUseCase.execute("01", "02")
    expect(deletedAgentMission.id).toEqual(agentMission.id)
  })
})
import { AppError } from "../../../../shared/errors/AppError"
import { AgentInMemoryRepository } from "../../../Agents/RepositoryInMemory/AgentInMemoryRepository"
import { AgentsMissionsRepositoryInMemory } from "../../RepositoryInMemory/AgentsMissionsRepositoryInMemory"
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory"
import { CreateAgentMissionUseCase } from "./CreateAgentMissionUseCase"

let agentsMissionsRepository: AgentsMissionsRepositoryInMemory
let createAgentMissionUseCase: CreateAgentMissionUseCase
let missionReposInMemory :MissionRepositoryInMemory
let agentsRepositoryInMemory:AgentInMemoryRepository

describe("Create a new agent Mission", () => {
  beforeEach(() => {
    agentsMissionsRepository = new AgentsMissionsRepositoryInMemory()
    agentsRepositoryInMemory = new AgentInMemoryRepository()
    missionReposInMemory = new MissionRepositoryInMemory()
    createAgentMissionUseCase = new CreateAgentMissionUseCase(agentsMissionsRepository,missionReposInMemory,agentsRepositoryInMemory)
  })
  it("Should be able create a agent mission with undefined value.", async () => {
    expect(async () => {
      const missionAgent ={id_mission:'',id_agent:""}
      await createAgentMissionUseCase.execute(missionAgent.id_mission,missionAgent.id_agent)
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Shoudn't be able createa agent mission with not found mission or agent", async () => {
    expect(async () => {
      await createAgentMissionUseCase.execute("01","02")
    }).rejects.toBeInstanceOf(AppError)
  })

  it("should be able create agent mission", async () => {
    const newAgent = await  agentsRepositoryInMemory.create({ name: "agent", email: "agent@email", password: "xxx" })
    const newMission = await missionReposInMemory.create({ name: "newMission", creator: newAgent.id, description: "a new mission" })
    
    const newAgentMission = await createAgentMissionUseCase.execute(newMission.id,newAgent.id)
    expect(newAgentMission).toHaveProperty("id")
  })
})
import { AppError } from "../../../../shared/errors/AppError"
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory"
import { DeactivateMissionUseCase } from "./DeactiveMissionUseCase"

let missionRepositoryInMemory: MissionRepositoryInMemory
let deactivateMissionUseCase:DeactivateMissionUseCase

describe("Deactivate Mission",  () => {
  beforeEach(() => {
    missionRepositoryInMemory = new MissionRepositoryInMemory()
    deactivateMissionUseCase = new DeactivateMissionUseCase(missionRepositoryInMemory)
  })
  it("Shouldn't be able deactivate a mission with invalid value  id ", async () => {

    expect(async () => {
      const missionDEactivate = await deactivateMissionUseCase.execute("")
    }).rejects.toBeInstanceOf(AppError)

  })
  it("Shouldn't be able deactivate a mission with not found", async () => {
    expect(async () => {
     
      await deactivateMissionUseCase.execute("001")
   })
  })
  it("Should be able deactivate a mission", async () => {
    const mission = {
      id:"",
      name:"example mission",
      description:" That's a exemple of mission",
      creator:"agent",
      field:"fildExample",
      local:"localExample",
    }
    const newMission = await missionRepositoryInMemory.create(mission)
    const deactivateMission = await deactivateMissionUseCase.execute(newMission.id)
    expect(deactivateMission.is_active).toBe(false)
  })

})
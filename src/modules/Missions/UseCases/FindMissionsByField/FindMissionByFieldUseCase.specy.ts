import { AppError } from "../../../../shared/errors/AppError"
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory"
import { FindMissionsByFieldUseCase } from "./FindMissionsByFieldUseCase"

let missionRepositoryInMemory: MissionRepositoryInMemory
let findMissionsByFieldUseCase: FindMissionsByFieldUseCase
describe("Find Mission by field", () => {
  beforeEach(() => {
    missionRepositoryInMemory = new MissionRepositoryInMemory()
    findMissionsByFieldUseCase = new FindMissionsByFieldUseCase(missionRepositoryInMemory)
  })
  it("Should be able to find missions by a field", async () => {
    await missionRepositoryInMemory.create({name:"newMission",creator:"01",description:"A new Mission",field:"fieldMission"})
    const missionsByField =await  findMissionsByFieldUseCase.execute("fieldMission")
    expect(missionsByField[0].field).toBe("fieldMission")
  })
  it("Shouldn't be able to find missions by a field undefined", async () => {
    expect(async () => {
      await missionRepositoryInMemory.create({name:"newMission",creator:"01",description:"A new Mission",field:"fieldMission"})
      const missionsByField =await  findMissionsByFieldUseCase.execute("")
      expect(missionsByField[0].field).toBe("fieldMission")
    }).rejects.toBeInstanceOf(AppError)
  })
})
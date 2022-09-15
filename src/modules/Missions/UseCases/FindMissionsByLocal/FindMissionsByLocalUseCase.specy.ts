import { AppError } from "../../../../shared/errors/AppError"
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory"
import { FindMissionsByLocalUseCase } from "./FindMissionsByLocalUseCase"

let missionRepositoryInMemory: MissionRepositoryInMemory
let findMissionsByLocalUseCase: FindMissionsByLocalUseCase
describe("Find Mission by local", () => {
  beforeEach(() => {
    missionRepositoryInMemory = new MissionRepositoryInMemory()
    findMissionsByLocalUseCase = new FindMissionsByLocalUseCase(missionRepositoryInMemory)
  })
  it("Shouldn't be able find mission by local with undefined value",async () => {
    expect(async () => {
      await missionRepositoryInMemory.create({name:"newMission",creator:"01",description:"A new Mission",local:"LocalMission"})
      const missionsByLocal =await  findMissionsByLocalUseCase.execute("")
  }).rejects.toBeInstanceOf(AppError)
  })

  it("Should be able to find missions by a field", async () => {
    await missionRepositoryInMemory.create({name:"newMission",creator:"01",description:"A new Mission",local:"LocalMission"})
    const missionsByLocal =await  findMissionsByLocalUseCase.execute("LocalMission")
    expect(missionsByLocal[0].local).toBe("LocalMission")
  })
})
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory"
import { FindMissionByNameUseCase } from "./FindMissionByNameUseCase"

let missionRepositoryInMemory: MissionRepositoryInMemory
let findMissionByNameUseCase: FindMissionByNameUseCase

describe("List Mission by name ", () => {
  beforeEach(() => {
    missionRepositoryInMemory = new MissionRepositoryInMemory()
    findMissionByNameUseCase = new FindMissionByNameUseCase(missionRepositoryInMemory)
  })
  it("Should be able list a mission by name", async () => {
    missionRepositoryInMemory.create({name:"newMission",creator:"01",description:"A new Mission"})
    const missionByName =await  findMissionByNameUseCase.execute("newMission")
    expect(missionByName.name).toBe("newMission")
  })
})
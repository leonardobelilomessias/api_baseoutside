import { AppError } from "../../../../shared/errors/AppError"
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory"
import { CreateMissionUseCase } from "./CreateMissionUseCase"

let missionRepositoryInMemory: MissionRepositoryInMemory
let createMissionUseCase:CreateMissionUseCase

describe("Create Mission", () => {
  beforeEach(() => {
    missionRepositoryInMemory = new MissionRepositoryInMemory()
    createMissionUseCase = new CreateMissionUseCase(missionRepositoryInMemory)
  })
  it("Shouldn't be able create a new mission with some invalid fild", async () => {
    expect(async() => {
      await createMissionUseCase.execute({name:"",description:"",creator:""})
   }).rejects.toBeInstanceOf(AppError)
  })
  it("shouldn't be able create a mission with name already existent ,",async () => {
    expect(async () => {
      await createMissionUseCase.execute({ name: "missionExample", description: "Example mission", creator: "01" })
      await createMissionUseCase.execute({name:"missionExample",description:"Example mission",creator:"01"})
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Should be able create a new mission",async () => {
  const newMission =   await createMissionUseCase.execute({ name: "missionExample", description: "Example mission", creator: "01" })
  expect(newMission.name).toBe("missionExample") 
  })
})
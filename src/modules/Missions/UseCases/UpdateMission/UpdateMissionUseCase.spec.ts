import { AppError } from "../../../../shared/errors/AppError";
import { mission } from "../../../../shared/infra/http/Routes/Mission.routes";
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory";
import { UpdateMissionUseCase } from "./UpdateMissionUseCase";

let missionRepository: MissionRepositoryInMemory
let updateMissionUseCase: UpdateMissionUseCase

describe("Update Mission", () => {
  beforeEach(() => {
    missionRepository = new MissionRepositoryInMemory()
    updateMissionUseCase = new UpdateMissionUseCase(missionRepository)
  })
  it('Update Mission without id', async()=> {
    expect(async () => {
      const mission = {
        name:"example mission",
        description:" That's a exemple of mission",
        creator:"agent",
        field:"fildExample",
        local:"localExample",
      }
      const editMission = {
        name:"example mission",
        description:" That's a exemple of mission",
        creator:"agent",
        field:"fildExample",
        local:"localExample",
      }
      const newMission = await missionRepository.create(mission)
      const updatedMission = await updateMissionUseCase.execute(editMission)
    }).rejects.toBeInstanceOf(AppError)

  })
  it("Shouldn't be able update a mission not found ", async () => {
    expect(async () => {
      const mission = {
        name:"example mission",
        description:" That's a exemple of mission",
        creator:"agent",
        field:"fildExample",
        local:"localExample",
      }
      const editMission = {
        id:'01',
        name:"example mission",
        description:" That's a exemple of mission",
        creator:"agent",
        field:"fildExample",
        local:"localExample",
      }
      const newMission = await missionRepository.create(mission)
      const updatedMission = await updateMissionUseCase.execute(editMission)
    }).rejects.toBeInstanceOf(AppError)
  })
  it("Shouldn't be able update  a mission", async () => {
    const mission = {
      name:"example mission",
      description:" That's a exemple of mission",
      creator:"agent",
      field:"fildExample",
      local:"localExample",
    }
    const newMission = await missionRepository.create(mission)
    const editMission = {
      id:newMission.id,
      name:"new example mission",
      description:" That's a exemple of update mission",
      creator:"agent",
      field:"fildExample",
      local:"localExample",
    }

    const updatedMission = await updateMissionUseCase.execute(editMission)
    expect(updatedMission).toEqual(editMission)
  })
})
import { mission } from "../../../../shared/infra/http/Routes/Mission.routes";
import { MissionRepositoryInMemory } from "../../RepositoryInMemory/MissionRepositoryInMemory";
import { UpdateMissionUseCase } from "./UpdateMissionUseCase";

let missionRepository: MissionRepositoryInMemory
let updateMissionUseCase: UpdateMissionUseCase

describe("Update Mission use case", () => {
  beforeEach(() => {
    missionRepository = new MissionRepositoryInMemory()
    updateMissionUseCase = new UpdateMissionUseCase(missionRepository)
  })
  it('Update Mission', async()=> {
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
    

  })
})
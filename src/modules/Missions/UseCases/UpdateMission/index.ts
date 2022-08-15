import { MissionRepository } from "../../infra/typeorm/repositories/MissionReposioty";
import { UpdateMissionController } from "./UpdateMissionController";
import { UpdateMissionUseCase } from "./UpdateMissionUseCase";

const missionRepository = new MissionRepository()
const updateMissionUseCase = new UpdateMissionUseCase(missionRepository)
const updateMissionController = new UpdateMissionController(updateMissionUseCase)

export{updateMissionController}
import { MissionRepository } from "../../infra/typeorm/repositories/MissionReposioty";
import { FindMissionsByFieldUseCaseController } from "./FindMissionsByFieldController";
import { FindMissionsByFieldUseCase } from "./FindMissionsByFieldUseCase";

const missionRepository = new MissionRepository()
const findMissionsByFieldUseCase = new FindMissionsByFieldUseCase(missionRepository)
const findMissionsByFieldController = new FindMissionsByFieldUseCaseController(findMissionsByFieldUseCase)
export{findMissionsByFieldController}
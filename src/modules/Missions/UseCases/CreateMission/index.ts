
import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { CreateMissionController } from "./CreateMissionController";
import { CreateMissionUseCase } from "./CreateMissionUseCase";

const missionRepository = new MissionRepository()
const createMissionUseCase = new CreateMissionUseCase(missionRepository)
const createMissionController = new CreateMissionController(createMissionUseCase)

export { createMissionController}
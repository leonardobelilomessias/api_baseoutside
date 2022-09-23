
import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { ListMissionController } from "./ListMissionController";
import { ListMissionUseCase } from "./ListMissionUseCase";

const missionRepository = new MissionRepository()
const listMissionUseCase = new ListMissionUseCase(missionRepository)
const listMissionController = new ListMissionController(listMissionUseCase)

export{listMissionController}
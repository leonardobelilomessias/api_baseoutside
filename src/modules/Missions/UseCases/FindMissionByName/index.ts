import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { FindMissionByNameController } from "./FindMissionByNameController";
import { FindMissionByNameUseCase } from "./FindMissionByNameUseCase";

const missionRepository = new MissionRepository()
const findMissionByNameUseCase = new FindMissionByNameUseCase(missionRepository)
const findMissionByNameController = new FindMissionByNameController(findMissionByNameUseCase)
export{findMissionByNameController}
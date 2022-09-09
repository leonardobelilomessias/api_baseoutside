import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { UpdateWarningMissionController } from "./updateWarningMissionController";
import { UpdateWarningMissionUseCase } from "./UpdateWarningMissionUseCase";

const warningMissionRepository = new WarningMissionRepository()
const updateWarningMissionUseCase = new UpdateWarningMissionUseCase(warningMissionRepository)
const updateWarningMissionController = new UpdateWarningMissionController(updateWarningMissionUseCase)
export{updateWarningMissionController}
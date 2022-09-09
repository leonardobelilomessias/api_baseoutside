import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { DeleteWarningMissionController } from "./DeleteWarningMissionController";
import { DeleteWarningMissionUseCase } from "./DeleteWarningMissionUseCase";

const warningMissionRepository = new WarningMissionRepository()
const deleteWarningMissionUseCase = new  DeleteWarningMissionUseCase(warningMissionRepository)
const deletedWarnigMissionController = new DeleteWarningMissionController(deleteWarningMissionUseCase)
export{deletedWarnigMissionController}
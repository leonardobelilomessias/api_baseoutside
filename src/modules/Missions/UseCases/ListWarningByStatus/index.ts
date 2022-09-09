import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { ListWarningsMissionBySatusController } from "./ListWarningsMissionByStatusController";

import { ListWarningsMissionByStatusUseCase } from "./ListWarningsMissionByStatusUseCase";

const warningsMissionRepository = new WarningMissionRepository()
const listwarnigsMissionUseCase = new ListWarningsMissionByStatusUseCase(warningsMissionRepository)
const listwarnigsMissionByStateController = new ListWarningsMissionBySatusController(listwarnigsMissionUseCase)
export{listwarnigsMissionByStateController}
import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { ListWarningsMissionController } from "./ListWarningsMissionController";
import { ListWarningsMissionUseCase } from "./ListWarningsMissionUseCase";

const warningsMissionRepository = new WarningMissionRepository()
const listwarnigsMissionUseCase = new ListWarningsMissionUseCase(warningsMissionRepository)
const listwarnigsMissionController = new ListWarningsMissionController(listwarnigsMissionUseCase)
export{listwarnigsMissionController}
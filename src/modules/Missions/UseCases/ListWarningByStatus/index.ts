import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { ListWarningsMissionBySatusController } from "./ListWarningsMissionByStatusController";

import { ListWarningsMissionByStatusUseCase } from "./ListWarningsMissionByStatusUseCase";
export default()=>{
    
    const warningsMissionRepository = new WarningMissionRepository()
    const listwarnigsMissionUseCase = new ListWarningsMissionByStatusUseCase(warningsMissionRepository)
    const listwarnigsMissionByStateController = new ListWarningsMissionBySatusController(listwarnigsMissionUseCase)
    return listwarnigsMissionByStateController
}
import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { ListWarningsMissionBySatusController } from "./ListWarningsMissionByTypeController";

import { ListWarningsMissionByTypeUseCase } from "./ListWarningsMissionByTypeUseCase";
export default()=>{
    
    const warningsMissionRepository = new WarningMissionRepository()
    const listwarnigsMissionUseCase = new ListWarningsMissionByTypeUseCase(warningsMissionRepository)
    const listwarnigsMissionByTypeController = new ListWarningsMissionBySatusController(listwarnigsMissionUseCase)
    return listwarnigsMissionByTypeController
}
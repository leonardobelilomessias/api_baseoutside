import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { ListWarningsMissionBySatusController } from "./ListWarningsMissionByPriorityController";

import { ListWarningsMissionByPriorityUseCase } from "./ListWarningsMissionByPriorityUseCase";

export default()=>{
    
    const warningsMissionRepository = new WarningMissionRepository()
    const listwarnigsMissionUseCase = new ListWarningsMissionByPriorityUseCase(warningsMissionRepository)
    const listwarnigsMissionByPriorityController = new ListWarningsMissionBySatusController(listwarnigsMissionUseCase)
    return listwarnigsMissionByPriorityController
} 
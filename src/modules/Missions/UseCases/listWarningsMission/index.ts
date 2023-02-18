import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { ListWarningsMissionController } from "./ListWarningsMissionController";
import { ListWarningsMissionUseCase } from "./ListWarningsMissionUseCase";
export default()=>{
    
    const warningsMissionRepository = new WarningMissionRepository()
    const listwarnigsMissionUseCase = new ListWarningsMissionUseCase(warningsMissionRepository)
    const listwarnigsMissionController = new ListWarningsMissionController(listwarnigsMissionUseCase)
    return listwarnigsMissionController
}
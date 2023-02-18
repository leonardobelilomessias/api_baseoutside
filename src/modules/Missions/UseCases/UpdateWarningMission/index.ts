import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { UpdateWarningMissionController } from "./updateWarningMissionController";
import { UpdateWarningMissionUseCase } from "./UpdateWarningMissionUseCase";

export default()=>{
    
    const warningMissionRepository = new WarningMissionRepository()
    const updateWarningMissionUseCase = new UpdateWarningMissionUseCase(warningMissionRepository)
    const updateWarningMissionController = new UpdateWarningMissionController(updateWarningMissionUseCase)
    return updateWarningMissionController
}
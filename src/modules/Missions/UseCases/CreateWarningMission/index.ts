import { WarningMissionRepository } from "../../infra/typeorm/repositories/WarningsMissionRepository";
import { CreaterWarningMissionController } from "./CreateWarningMissionController";
import { CreateWarningMissionUseCase } from "./CreateWarningMissionUseCase";

export default()=>{
    
    const warningMissionRepository = new WarningMissionRepository()
    const createWarningMissionUseCase = new CreateWarningMissionUseCase(warningMissionRepository)
    const createWarningMissionController = new CreaterWarningMissionController(createWarningMissionUseCase)
    return createWarningMissionController
}
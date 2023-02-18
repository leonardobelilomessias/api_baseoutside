import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { UpdateMissionController } from "./UpdateMissionController";
import { UpdateMissionUseCase } from "./UpdateMissionUseCase";
export default()=>{
    
    const missionRepository = new MissionRepository()
    const updateMissionUseCase = new UpdateMissionUseCase(missionRepository)
    const updateMissionController = new UpdateMissionController(updateMissionUseCase)
    
    return updateMissionController
}

import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { ListMissionController } from "./ListMissionController";
import { ListMissionUseCase } from "./ListMissionUseCase";

export default()=>{
    
    const missionRepository = new MissionRepository()
    const listMissionUseCase = new ListMissionUseCase(missionRepository)
    const listMissionController = new ListMissionController(listMissionUseCase)
    
    return listMissionController
}
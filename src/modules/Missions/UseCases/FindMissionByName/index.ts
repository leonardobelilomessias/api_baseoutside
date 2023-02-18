import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { FindMissionByNameController } from "./FindMissionByNameController";
import { FindMissionByNameUseCase } from "./FindMissionByNameUseCase";

export default()=>{
    
    const missionRepository = new MissionRepository()
    const findMissionByNameUseCase = new FindMissionByNameUseCase(missionRepository)
    const findMissionByNameController = new FindMissionByNameController(findMissionByNameUseCase)
    return findMissionByNameController
}
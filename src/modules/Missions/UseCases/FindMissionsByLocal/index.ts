
import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository";
import { FindMissionsByLocalUseCaseController } from "./FindMissionsByLocalController";
import { FindMissionsByLocalUseCase } from "./FindMissionsByLocalUseCase";

export default()=>{
    
    const missionRepository = new MissionRepository()
    const findMissionsByLocalUseCase = new FindMissionsByLocalUseCase(missionRepository)
    const findMissionsByLocalController = new FindMissionsByLocalUseCaseController(findMissionsByLocalUseCase)
    return findMissionsByLocalController
}
import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository"
import { FetchMissionProfileController } from "./FetchMissionProfileController"
import { FetchMissionProfileUseCase } from "./FetchMissionProfileUseCase"

export default()=>{
    const missionRepository = new MissionRepository()
    const fetchProfileMissionUseCase = new FetchMissionProfileUseCase(missionRepository)
    const fetchProfileMissionController = new FetchMissionProfileController(fetchProfileMissionUseCase)
    return fetchProfileMissionController
}
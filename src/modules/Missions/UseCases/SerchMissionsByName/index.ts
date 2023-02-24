import { MissionRepository } from "../../infra/typeorm/repositories/MissionRepository"
import { SearchMissionsByNameController } from "./SearchMissionsByNameController"
import { SearchMissionsByNameUseCase } from "./SearchMissionsByNameUseCase"

export default()=>{
    const missionRepository = new MissionRepository()
    const serachMissionsByNameUseCase = new SearchMissionsByNameUseCase(missionRepository)
    const searchAgentsBynameController = new SearchMissionsByNameController(serachMissionsByNameUseCase)
    return searchAgentsBynameController
}
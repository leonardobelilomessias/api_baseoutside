import { IMissionRepository } from "../../repositories/IMissonRepository";

class FetchMissionProfileUseCase{
    private missionRepository:IMissionRepository
    constructor(missionRepository:IMissionRepository){
        this.missionRepository = missionRepository
    }
    async execute(id:string){
        const missionFound = await this.missionRepository.fetchProfileMission(id)
        return missionFound
    }
}
export{FetchMissionProfileUseCase}
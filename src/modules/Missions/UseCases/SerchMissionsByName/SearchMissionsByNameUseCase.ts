import { IMissionRepository } from "../../repositories/IMissonRepository"

class SearchMissionsByNameUseCase{
    private missionsRepository:IMissionRepository
    constructor(missionsRepository:IMissionRepository){
        this.missionsRepository = missionsRepository
    }
    async execute(name:string){
        const foundMissions = await this.missionsRepository.serachMissionsByName(name)
        return foundMissions
    }

}
export{ SearchMissionsByNameUseCase}
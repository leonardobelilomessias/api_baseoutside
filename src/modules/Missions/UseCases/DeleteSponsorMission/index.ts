import { SponsorsMissionsRepository } from "../../infra/typeorm/repositories/SponsorMissionRepository";
import { DeleteSponsorMissionController } from "./DeleteSponsorMissionController";
import { DeleteSponsorMissionUseCase } from "./DeleteSponsorMissionUseCase";

export default()=>{
    
    const sponsorMissionRepository = new SponsorsMissionsRepository()
    const deleteSponsorMissionUseCase = new DeleteSponsorMissionUseCase(sponsorMissionRepository)
    const deleteSponsorMissionController = new DeleteSponsorMissionController(deleteSponsorMissionUseCase)
    return deleteSponsorMissionController
}
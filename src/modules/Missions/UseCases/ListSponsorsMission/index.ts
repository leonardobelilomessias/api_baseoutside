import { SponsorsMissionsRepository } from "../../infra/typeorm/repositories/SponsorMissionRepository";
import { ListMissionController } from "../ListMission/ListMissionController";
import { ListSponsorsMissionController } from "./ListSponsorsMissionsController";
import { ListSponsorsMissionUseCase } from "./ListSponsorsMissionUseCase";

export default()=>{
    
    const sponsorsMissionsRepository = new SponsorsMissionsRepository()
    const listSponsorsMissionUseCase = new ListSponsorsMissionUseCase(sponsorsMissionsRepository)
    const listsponsorsMissionsController = new ListSponsorsMissionController(listSponsorsMissionUseCase)
    return listsponsorsMissionsController
}
import { SponsorsMissionsRepository } from "../../infra/typeorm/repositories/SponsorMissionRepository";
import { ListMissionsSponsorController } from "./ListMissionsSponsorController";
import { ListMissionsSponsorUsecase } from "./ListMissionsSponsorUseCase";

export default()=>{
    
    const sponsorsMissionsRepository = new SponsorsMissionsRepository()
    const listMissionsSponsorUseCase = new ListMissionsSponsorUsecase(sponsorsMissionsRepository)
    const listmissionsSponsorsController = new ListMissionsSponsorController(listMissionsSponsorUseCase)
    return listmissionsSponsorsController
}
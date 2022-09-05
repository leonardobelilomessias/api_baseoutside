import { SponsorsMissionsRepository } from "../../infra/typeorm/repositories/SponsorMissionRepository";
import { ListMissionsSponsorController } from "./ListMissionsSponsorController";
import { ListMissionsSponsorUsecase } from "./ListMissionsSponsorUseCase";

const sponsorsMissionsRepository = new SponsorsMissionsRepository()
const listMissionsSponsorUseCase = new ListMissionsSponsorUsecase(sponsorsMissionsRepository)
const listmissionsSponsorsController = new ListMissionsSponsorController(listMissionsSponsorUseCase)

export{listmissionsSponsorsController}
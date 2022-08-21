import { SponsorsMissionsRepository } from "../../infra/typeorm/repositories/SponsorMissionRepository";
import { DeleteSponsorMissionController } from "./DeleteSponsorMissionController";
import { DeleteSponsorMissionUseCase } from "./DeleteSponsorMissionUseCase";

const sponsorMissionRepository = new SponsorsMissionsRepository()
const deleteSponsorMissionUseCase = new DeleteSponsorMissionUseCase(sponsorMissionRepository)
const deleteSponsorMissionController = new DeleteSponsorMissionController(deleteSponsorMissionUseCase)

export{deleteSponsorMissionController}
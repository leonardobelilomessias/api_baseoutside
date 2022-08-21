import { SponsorsMissionsRepository } from "../../infra/typeorm/repositories/SponsorMissionRepository";
import { CreateSponsorMissionController } from "./CreateSponsorController";
import { CreateSponsorMissionUseCase } from "./CreateSponsorMissionUseCase";

const sponsorsMissionsRepository = new SponsorsMissionsRepository()
const createSponsorMissionUseCase = new CreateSponsorMissionUseCase(sponsorsMissionsRepository)
const createSponsorMissionController = new CreateSponsorMissionController(createSponsorMissionUseCase)

export {createSponsorMissionController}
import { SponsorsMissionsRepository } from "../../infra/typeorm/repositories/SponsorMissionRepository";
import { ListMissionController } from "../ListMission/ListMissionController";
import { ListSponsorsMissionController } from "./ListSponsorsMissionsController";
import { ListSponsorsMissionUseCase } from "./ListSponsorsMissionUseCase";

const sponsorsMissionsRepository = new SponsorsMissionsRepository()
const listSponsorsMissionUseCase = new ListSponsorsMissionUseCase(sponsorsMissionsRepository)
const listsponsorsMissionsController = new ListSponsorsMissionController(listSponsorsMissionUseCase)

export{listsponsorsMissionsController}
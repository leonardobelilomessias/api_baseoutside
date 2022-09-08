import { JourneyMissionRepository } from "../../infra/typeorm/repositories/JourneyMissionRepository";
import { DeleteJourneyMissionController } from "./DeleteJourneyMissionController";
import { DeleteJourneyMissionUseCase } from "./DeleteJourneyMissionUseCase";

const journeyMissionRepository = new JourneyMissionRepository()
const deleteJourneyMissionUseCase = new DeleteJourneyMissionUseCase(journeyMissionRepository)
const deletedJourneyMissionController = new DeleteJourneyMissionController(deleteJourneyMissionUseCase)

export{deletedJourneyMissionController}
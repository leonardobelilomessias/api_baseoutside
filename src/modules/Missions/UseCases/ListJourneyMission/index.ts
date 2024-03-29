import { JourneyMissionRepository } from "../../infra/typeorm/repositories/JourneyMissionRepository";
import { ListJourneysMissionUseCase } from "../ListJourneysMissionUseCase/ListJourneysMssionUseCase";
import { ListJourneyMissionController } from "./ListJourneyMissionController";

export default()=>{
    
    const journeyMissionRepository = new JourneyMissionRepository()
    const listJourneyMissionUseCase = new ListJourneysMissionUseCase(journeyMissionRepository)
    const listJourneysMissionController = new ListJourneyMissionController(listJourneyMissionUseCase)
    return listJourneysMissionController
}
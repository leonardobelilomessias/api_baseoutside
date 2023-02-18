import { JourneyMissionRepository } from "../../infra/typeorm/repositories/JourneyMissionRepository"
import { ListJourneysMissionController } from "./ListJourneysMisionController"
import { ListJourneysMissionUseCase } from "./ListJourneysMssionUseCase"

export default()=>{
    
    const journeyMissionRepository = new JourneyMissionRepository()
    const listJourneyAgenUseCase = new ListJourneysMissionUseCase(journeyMissionRepository)
    const listJourneyMissionController = new ListJourneysMissionController(listJourneyAgenUseCase)
    
    return listJourneyMissionController
}
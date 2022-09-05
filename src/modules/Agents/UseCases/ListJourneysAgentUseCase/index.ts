import { JourneyAgentRepository } from "../../infra/typeorm/repositories/JourneyAgentRepository";
import { ListJourneysAgentController } from "./ListJourneysAgentController";
import { ListJourneysAgentUseCase } from "./ListJourneysAgents";

const journeyAgentRepository = new JourneyAgentRepository()
const listJourneyAgenUseCase = new ListJourneysAgentUseCase(journeyAgentRepository)
const listJourneyAgentController = new ListJourneysAgentController(listJourneyAgenUseCase)

export{listJourneyAgentController}
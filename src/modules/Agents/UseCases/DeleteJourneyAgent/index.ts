import { JourneyAgentRepository } from "../../infra/typeorm/repositories/JourneyAgentRepository";
import { DeleteJourneyAgentController } from "./DeleteJourneyAgentController";
import { DeleteJourneyAgentUseCase } from "./DeleteJourneyAgentUseCase";

const journeyAgentRepository = new JourneyAgentRepository()
const deleteJourneyAgentUseCase = new DeleteJourneyAgentUseCase(journeyAgentRepository)
const deletedJourneyAgentController = new DeleteJourneyAgentController(deleteJourneyAgentUseCase)

export{deletedJourneyAgentController}
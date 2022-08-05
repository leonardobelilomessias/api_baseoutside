import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository.ts";
import { CreateNewSponsorAgentController } from "./CreateNewSponsorAgentController";
import { CreateNewSponsorAgentUseCase } from "./CreateNewSponsorAgentUseCase";

const sponsorsAgentsRepository = new SponsorsAgentsRepository()
const createNewSponsorAgentUseCase = new CreateNewSponsorAgentUseCase(sponsorsAgentsRepository)
const createNewSponsorAgentController = new CreateNewSponsorAgentController(createNewSponsorAgentUseCase)

export{ createNewSponsorAgentController}
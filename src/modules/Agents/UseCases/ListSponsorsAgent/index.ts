import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository.ts";
import { ListSponsorAgentController } from "./ListSponsorAgentController";
import { ListSponsorsAgentsUseCase } from "./ListSponsorsAgentsUseCase";

const sponsorsAgentsRepository = new SponsorsAgentsRepository()
const listSponsorAgentUseCase = new ListSponsorsAgentsUseCase(sponsorsAgentsRepository)
const listSponsorAgentController = new ListSponsorAgentController(listSponsorAgentUseCase)

export{listSponsorAgentController}
import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository";
import { ToCancelSponsorAgentController } from "./ToCancelSponsorAgentController";
import { ToCancelSponsorAgentUseCase } from "./ToCancelSponsorAgentUseCase";

const sponsorAgentRepository = new SponsorsAgentsRepository()
const toCancelSponsorAgentUseCase = new ToCancelSponsorAgentUseCase(sponsorAgentRepository)
const toCancelSponsorAgentController = new ToCancelSponsorAgentController(toCancelSponsorAgentUseCase)

export{toCancelSponsorAgentController}

import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository"
import { FeedColabController } from "../FeedColab/FeedColabController"
import { FeedColabUseCase } from "../FeedColab/FeedColabUseCase"
import { FeedSponsorAgentController } from "./FeedSponsorAgentController"
import { FeedSponsorAgentUseCase } from "./FeedSponsorAgentUseCase"

export default () => {
    const sponsorAgentRepository = new SponsorsAgentsRepository()
    const feedSponsorUseCase = new FeedSponsorAgentUseCase(sponsorAgentRepository)
    const feedSponsorController = new FeedSponsorAgentController(feedSponsorUseCase)
    return feedSponsorController
}
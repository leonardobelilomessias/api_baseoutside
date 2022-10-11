import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { FeedColabController } from "./FeedColabController";
import { FeedColabUseCase } from "./FeedColabUseCase";

const colabAgentRepository = new ColabAgentRepository()
const feedColabUseCase = new FeedColabUseCase(colabAgentRepository)
const feedColabController = new FeedColabController(feedColabUseCase)

export{feedColabController}
import { ColabAgentRepository } from "../../infra/typeorm/repositories/ColabRepository";
import { FeedColabController } from "./FeedColabController";
import { FeedColabUseCase } from "./FeedColabUseCase";

export default()=>{

  const colabAgentRepository = new ColabAgentRepository()
  const feedColabUseCase = new FeedColabUseCase(colabAgentRepository)
  const feedColabController = new FeedColabController(feedColabUseCase)
  return feedColabController
}

import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository";

import { CreateNewSponsorAgentController } from "./CreateNewSponsorAgentController";
import { CreateNewSponsorAgentUseCase } from "./CreateNewSponsorAgentUseCase";

export default () => {
  const sponsorsAgentsRepository = new SponsorsAgentsRepository()
  const agentRepository = new AgentRepository()
  const createNewSponsorAgentUseCase = new CreateNewSponsorAgentUseCase(sponsorsAgentsRepository, agentRepository)
  const createNewSponsorAgentController = new CreateNewSponsorAgentController(createNewSponsorAgentUseCase)
  return createNewSponsorAgentController

}


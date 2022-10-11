import { SponsorsAgentsRepository } from "../../infra/typeorm/repositories/SponsorsAgentRepository";
import { ListSponsorAgentController } from "./ListSponsorAgentController";
import { ListSponsorsAgentsUseCase } from "./ListSponsorsAgentsUseCase";

export default()=>{

  const sponsorsAgentsRepository = new SponsorsAgentsRepository()
  const listSponsorAgentUseCase = new ListSponsorsAgentsUseCase(sponsorsAgentsRepository)
  const listSponsorAgentController = new ListSponsorAgentController(listSponsorAgentUseCase)
  return listSponsorAgentController
}


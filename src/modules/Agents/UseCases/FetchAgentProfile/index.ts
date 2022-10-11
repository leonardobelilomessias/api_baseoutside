import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { FetchAgentProfileController } from "./FetchAgentProfileController";
import { FetchAgentProfileUseCase } from "./FetchAgentProfileUseCase";

export default()=>{

  const agentRepository = new AgentRepository()
  const fetchAgentProfileUseCase = new FetchAgentProfileUseCase(agentRepository)
  const fetchAgentProfileController = new FetchAgentProfileController(fetchAgentProfileUseCase)
  return fetchAgentProfileController

}

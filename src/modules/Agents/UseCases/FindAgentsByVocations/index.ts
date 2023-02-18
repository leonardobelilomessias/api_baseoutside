import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { FindAgentsByVocationController } from "./FindAgentsByVocationController";
import { FindAgentsByVocationUseCase } from "./FindAgentsByVocationUseCase";

export default () => {

  const agentRepository = new AgentRepository()
  const findAgentsByVocationUseCase = new FindAgentsByVocationUseCase(agentRepository)
  const findAgentsByVocationController = new FindAgentsByVocationController(findAgentsByVocationUseCase)
  return findAgentsByVocationController
}

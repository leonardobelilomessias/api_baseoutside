import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository";
import { UpdateAgentController } from "./UpdateAgentConroller";
import { UpdateAgentUseCase } from "./UpdateAgentUseCase";

export default()=>{
  const agentRepository = new AgentRepository()
  const updateAgentUseCase = new UpdateAgentUseCase(agentRepository)
  const updateAgentController = new UpdateAgentController(updateAgentUseCase)
  return updateAgentController
}


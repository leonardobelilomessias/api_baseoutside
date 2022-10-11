import { AgentRepository } from "../../infra/typeorm/repositories/AgentRepository"
import { FindAgentByIdController } from "./FindAgentByIdController"
import { FindAgentByIdUseCase } from "./FindAgentByIdUseCase"

export default()=>{
  const agentRepository = new AgentRepository()
  const findAgentByIdUseCase =  new FindAgentByIdUseCase(agentRepository)
  const findAgentByIdController = new FindAgentByIdController(findAgentByIdUseCase)
  return findAgentByIdController
}
import { AgentRepository } from "../../Agents/Repository/AgentRepository";
import { AuthenticateAgentController } from "./AuthenticateAgent.Controller";
import { AuthenticateAgentUseCase } from "./AuthenticateAgentUseCase";

const agentReposiotory = new AgentRepository()
const authenticateAgentUseCase = new AuthenticateAgentUseCase(agentReposiotory)
const authenticateAgentController = new AuthenticateAgentController(authenticateAgentUseCase)

export { authenticateAgentController}
import { AgentRepository } from "../../Agents/Repository/AgentRepository";
import { AgentTokenRepository } from "../UserToken/Repository/AgentTokenRepository";
import { AuthenticateAgentController } from "./AuthenticateAgent.Controller";
import { AuthenticateAgentUseCase } from "./AuthenticateAgentUseCase";

const agentReposiotory = new AgentRepository()
const agentTokenRepository = new AgentTokenRepository()
const authenticateAgentUseCase = new AuthenticateAgentUseCase(agentReposiotory,agentTokenRepository)
const authenticateAgentController = new AuthenticateAgentController(authenticateAgentUseCase)

export { authenticateAgentController}
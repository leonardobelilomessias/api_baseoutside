
import { AgentRepository } from "../../Agents/infra/prisma/repositories/AgentRepository";
import { AgentTokenRepository } from "../UserToken/infra/typeorm/repositories/AgentTokenRepository";
import { AuthenticateAgentController } from "./AuthenticateAgent.Controller";
import { AuthenticateAgentUseCase } from "./AuthenticateAgentUseCase";

const agentReposiotory = new AgentRepository()
const agentTokenRepository = new AgentTokenRepository()
const authenticateAgentUseCase = new AuthenticateAgentUseCase(agentReposiotory, agentTokenRepository)
const authenticateAgentController = new AuthenticateAgentController(authenticateAgentUseCase)

export { authenticateAgentController }
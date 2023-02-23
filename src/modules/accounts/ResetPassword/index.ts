import { AgentRepository } from "../../Agents/infra/typeorm/repositories/AgentRepository";
import { AgentTokenRepository } from "../UserToken/infra/typeorm/repositories/AgentTokenRepository";
import { ResetPassworController } from "./ResetPassworController";
import { ResetPasswordUseCase } from "./ResetPasswordUseCase";

const agentReposiotory = new AgentRepository()
const agentTokenRepository = new AgentTokenRepository()
const resetePasswordUseCase = new ResetPasswordUseCase(agentReposiotory, agentTokenRepository)
const resetAgentController = new ResetPassworController(resetePasswordUseCase)

export { resetAgentController }
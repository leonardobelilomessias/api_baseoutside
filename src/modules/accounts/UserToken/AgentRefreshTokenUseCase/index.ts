import { AgentTokenRepository } from "../infra/typeorm/repositories/AgentTokenRepository";
import { AgentRefreshTokenController } from "./AgentRefreshTokenController";
import { AgentRefreshTokenUseCase } from "./AgentRefreshTokenUseCase";

const agentTokenReposiotory = new AgentTokenRepository()
const agentRefreshTokenUseCase = new AgentRefreshTokenUseCase(agentTokenReposiotory)
const agentRefreshTokenController = new AgentRefreshTokenController(agentRefreshTokenUseCase)

export{agentRefreshTokenController}
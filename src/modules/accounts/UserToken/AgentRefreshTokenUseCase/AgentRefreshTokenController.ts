import { Request, Response } from "express";
import { AgentRefreshTokenUseCase } from "./AgentRefreshTokenUseCase";

class AgentRefreshTokenController{
  private agentRefreshTokenUseCase: AgentRefreshTokenUseCase
  constructor(agentRefreshTokenUseCase:AgentRefreshTokenUseCase) {
    this.agentRefreshTokenUseCase = agentRefreshTokenUseCase
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const token = request.body.token || request.headers["x-access-token"] || request.query.token
    const refresh_token = await this.agentRefreshTokenUseCase.execute(token)
    return response.json(refresh_token)

  }
}

export {AgentRefreshTokenController}
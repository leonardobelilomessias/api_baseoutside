import { Router } from "express";
import { authenticateAgentController } from "../../../../modules/accounts/authenticateAgent";
import { agentRefreshTokenController } from "../../../../modules/accounts/UserToken/AgentRefreshTokenUseCase";


const authenticateRoutes = Router()

authenticateRoutes.post("/sessions", async (request, response) => {
  await authenticateAgentController.handle(request,response)
})
authenticateRoutes.post("/refresh-token", (request, response) => {
  agentRefreshTokenController.handle(request,response)
})

export{authenticateRoutes}
import { Router } from "express";
import { authenticateAgentController } from "../modules/accounts/authenticateAgent";

const authenticateRoutes = Router()
authenticateRoutes.post("/sessions", (request, response) => {
  authenticateAgentController.handle(request,response)
})

export{authenticateRoutes}
import { Router } from "express";
import { authenticateAgentController } from "../modules/accounts/authenticateAgent";

const authenticateRoutes = Router()

authenticateRoutes.post("/sessions", async (request, response) => {
  await authenticateAgentController.handle(request,response)
})

export{authenticateRoutes}
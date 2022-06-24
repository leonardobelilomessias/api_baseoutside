
import { Router } from "express";
import  createAgentController  from "../modules/Agents/UseCases/CreateAgent";
import { listAgentController } from "../modules/Agents/UseCases/ListAgent";

const agent = Router()

agent.get("/", (request, response) => {
  listAgentController.handle(request,response)
})

agent.post("/", (request, response) => {
  createAgentController().handle(request,response)
})

export {agent}
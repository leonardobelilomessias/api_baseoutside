
import { Router } from "express";
import  createAgentController  from "../modules/Agents/UseCases/CreateAgent";

const agent = Router()

agent.get("/list", (request, response) => {
  
})

agent.post("/", (request, response) => {
  console.log("router Agent")
  createAgentController().handle(request,response)
})

export {agent}
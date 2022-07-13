
import {  response, Router } from "express";
import multer from "multer";
import uploadConfig from '../config/upload'
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import  createAgentController  from "../modules/Agents/UseCases/CreateAgent";
import { deactivateAgentController } from "../modules/Agents/UseCases/DeactivateAgent";
import { findAgentController } from "../modules/Agents/UseCases/FindUser";
import { listAgentController } from "../modules/Agents/UseCases/ListAgent";
import { updateAgentController } from "../modules/Agents/UseCases/UpdateAgent";
import { updateImageAgentController } from "../modules/Agents/UseCases/UpdateAgentAvatar";

const agent = Router()

const upload_image_profile = multer(uploadConfig)

agent.get("/", (request, response) => {
  listAgentController.handle(request,response)
})

agent.get("/:name", (request, response) => {
  findAgentController.handle(request,response)
})

agent.post("/", (request, response) => {
  createAgentController().handle(request,response)
})

agent.patch("/image_profile",ensureAuthenticate, upload_image_profile.single("image_profile"),(request, response) => {
  updateImageAgentController.handle(request,response)
})

agent.put("/", (request, response) => {
  updateAgentController.handle(request,response)
})

agent.delete("/", (request, response) => {
  deactivateAgentController.handle(request,response)
})
export {agent}
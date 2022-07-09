
import {  Router } from "express";
import multer from "multer";
import uploadConfig from '../config/upload'
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import  createAgentController  from "../modules/Agents/UseCases/CreateAgent";
import { listAgentController } from "../modules/Agents/UseCases/ListAgent";
import { updateImageAgentController } from "../modules/Agents/UseCases/UpdateAgentAvatar";

const agent = Router()

const upload_image_profile = multer(uploadConfig)

agent.get("/", (request, response) => {
  listAgentController.handle(request,response)
})

agent.post("/", (request, response) => {
  createAgentController().handle(request,response)
})

agent.patch("/image_profile",ensureAuthenticate, upload_image_profile.single("image_profile"),(request, response) => {
  updateImageAgentController.handle(request,response)
})
export {agent}
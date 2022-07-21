
import {  response, Router } from "express";
import multer from "multer";
import uploadConfig from '../config/upload'
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import  createAgentController  from "../modules/Agents/UseCases/CreateAgent";
import { deactivateAgentController } from "../modules/Agents/UseCases/DeactivateAgent";
import { findyByInterestController } from "../modules/Agents/UseCases/FindByInterest";
import { findByVocationController } from "../modules/Agents/UseCases/FindByVocation";
import { findAgentController } from "../modules/Agents/UseCases/FindUser";
import { listAgentController } from "../modules/Agents/UseCases/ListAgent";
import { updateAgentController } from "../modules/Agents/UseCases/UpdateAgent";
import { updateImageAgentController } from "../modules/Agents/UseCases/UpdateAgentAvatar";

const agent = Router()

const upload_image_profile = multer(uploadConfig)
const uploadPhotosAgent = multer(uploadConfig)

agent.get("/",async  (request, response) => {
 await  listAgentController.handle(request,response)
})

agent.get("/:name", (request, response) => {
  findAgentController.handle(request,response)
})

agent.get("/",async (request, response) => {
  await findByVocationController.handle(request,response)
})

agent.get("/", async (request, response) => {
  await findyByInterestController.handle(request,response)
})
agent.post("/", (request, response) => {
  createAgentController().handle(request,response)
})

agent.post("/photopublicationagent",uploadPhotosAgent.array(), () => {
  
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
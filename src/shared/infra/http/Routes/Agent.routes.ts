
import {   Router} from "express";
import multer, { } from "multer";
import { createNewSponsorAgentController } from "../../../../modules/agents/UseCases/CreateNewSponsorAgent";
import { createPublicationAgentController } from "../../../../modules/agents/UseCases/CreatePublicationAgent";
import { deactivateAgentController } from "../../../../modules/agents/UseCases/DeactivateAgent";
import { findAgentBySkillController } from "../../../../modules/agents/UseCases/FindAgentBySkill";
import { findyByInterestController } from "../../../../modules/agents/UseCases/FindByInterest";
import { findByVocationController } from "../../../../modules/agents/UseCases/FindByVocation";
import { findAgentController } from "../../../../modules/agents/UseCases/FindUser";
import { listAgentController } from "../../../../modules/agents/UseCases/ListAgent";
import { updateAgentController } from "../../../../modules/agents/UseCases/UpdateAgent";
import { updateImageAgentController } from "../../../../modules/agents/UseCases/UpdateAgentAvatar";
import uploadConfig from '../../../../config/upload'
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import createAgentController from '../../../../modules/agents/UseCases/CreateAgent/index'


const agent = Router()

const upload_image_profile = multer(uploadConfig)
const uploadPhotosAgent = multer(uploadConfig)


agent.get("/",async  (request, response) => {
 await  listAgentController.handle(request,response)
})

agent.get("/name/:name", async (request, response) => {
  await findAgentController.handle(request,response)
})
agent.get("/findBySkill", (request, response) => {
  findAgentBySkillController.handle(request,response)
})
agent.get("/findByVocation",async (request, response) => {
  await findByVocationController.handle(request,response)
})

agent.get("/findByInterest", async (request, response) => {
  await findyByInterestController.handle(request,response)
})

agent.post("/sponsorAgent", (request, response) => {
  createNewSponsorAgentController.handle(request,response)
})



agent.post("/", async (request, response) => {

   await createAgentController().handle(request,response)
})

agent.post("/photopublicationagent", uploadPhotosAgent.array('photos', 3), async (request, response) => {
  
 await createPublicationAgentController.handle(request,response)
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
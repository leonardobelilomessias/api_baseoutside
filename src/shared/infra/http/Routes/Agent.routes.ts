
import {   Router} from "express";
import multer, { } from "multer";
import { createNewSponsorAgentController } from "../../../../modules/agents/UseCases/CreateNewSponsorAgent";
import { createPublicationAgentController } from "../../../../modules/agents/UseCases/CreatePublicationAgent";
import { deactivateAgentController } from "../../../../modules/agents/UseCases/DeactivateAgent";
import { findyByInterestController } from "../../../../modules/agents/UseCases/FindByInterest";
import { updateAgentController } from "../../../../modules/agents/UseCases/UpdateAgent";
import { updateImageAgentController } from "../../../../modules/agents/UseCases/UpdateAgentAvatar";
import uploadConfig from '../../../../config/upload'
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import createAgentController from '../../../../modules/agents/UseCases/CreateAgent/index'
import { findAgentByNameController } from "../../../../modules/agents/UseCases/FindAgentByName";
import { listsAgentController } from "../../../../modules/agents/UseCases/ListAgents";
import { findAgentsBySkillsController } from "../../../../modules/agents/UseCases/FindAgentBySkill";
import { findAgentsByVocationController } from "../../../../modules/agents/UseCases/FindAgentsByVocations";
import { updatePublicationAgentController } from "../../../../modules/agents/UseCases/UpdatePublicationAgent";
import { listAllPublicationsAgentsController } from "../../../../modules/agents/UseCases/ListAllPublicationsAgents";
import { listPublicatonsByIdAgentController } from "../../../../modules/agents/UseCases/ListPublicationByAgentName";
import { toCancelSponsorAgentController } from "../../../../modules/agents/UseCases/ToCancelSponsorAgent";
import { listSponsorAgentController } from "../../../../modules/agents/UseCases/ListSponsorsAgent";
import { createColabAgentController } from "../../../../modules/agents/UseCases/CreateColab";


const agent = Router()

const upload_image_profile = multer(uploadConfig)
const uploadPhotosAgent = multer(uploadConfig)


agent.get("/",async  (request, response) => {
 await  listsAgentController.handle(request,response)
})

agent.get("/name/:name",  (request, response) => {
   findAgentByNameController.handle(request,response)
})
agent.get("/findBySkill", (request, response) => {
  findAgentsBySkillsController.handle(request,response)
})
agent.get("/FindAgentsByVocation",async (request, response) => {
  await findAgentsByVocationController.handle(request,response)
})

agent.get("/findByInterest", async (request, response) => {
  await findyByInterestController.handle(request,response)

})
agent.get("/listAllPublicationsAgents",  (request, response) => {
   listAllPublicationsAgentsController.handle(request,response)
})
agent.get("/listPublicationsByIdAgent",  (request, response) => {
  listPublicatonsByIdAgentController.handle(request,response)
})

agent.get("/listSponsorsAgent", (request, response) => {
  listSponsorAgentController.handle(request,response)
})

agent.post("/sponsorAgent",async (request, response) => {
  await createNewSponsorAgentController.handle(request,response)
})



agent.post("/", async (request, response) => {
   await createAgentController().handle(request,response)
})

agent.post("/photopublicationagent", uploadPhotosAgent.array('photos', 3), async (request, response) => {
 await createPublicationAgentController.handle(request,response)
})
agent.post("/createColabAgent", async (request, response) => {
  await createColabAgentController.handle(request,response)
 })

agent.patch("/image_profile",ensureAuthenticate, upload_image_profile.single("image_profile"),(request, response) => {
  updateImageAgentController.handle(request,response)
})
agent.patch("/updatePublication",(request, response) => {
   updatePublicationAgentController.handle(request,response)
})
agent.put("/",async  (request, response) => {

  await updateAgentController.handle(request,response)
})

agent.delete("/", (request, response) => {
  deactivateAgentController.handle(request,response)
})
agent.delete("/toCancelSponsorAgent",async (request, response) => {
  await toCancelSponsorAgentController.handle(request,response)
})
export {agent}
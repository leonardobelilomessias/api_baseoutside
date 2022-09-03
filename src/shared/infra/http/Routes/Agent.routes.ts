
import {   Router} from "express";
import multer, { } from "multer";
import { createNewSponsorAgentController } from "../../../../modules/Agents/UseCases/CreateNewSponsorAgent";
import { createPublicationAgentController } from "../../../../modules/Agents/UseCases/CreatePublicationAgent";
import { deactivateAgentController } from "../../../../modules/Agents/UseCases/DeactivateAgent";
import { findyByInterestController } from "../../../../modules/Agents/UseCases/FindByInterest";
import { updateAgentController } from "../../../../modules/agents/UseCases/UpdateAgent";
import { updateImageAgentController } from "../../../../modules/Agents/UseCases/UpdateAgentAvatar";
import uploadConfig from '../../../../config/upload'
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import createAgentController from '../../../../modules/Agents/UseCases/CreateAgent/index'
import { findAgentByNameController } from "../../../../modules/Agents/UseCases/FindAgentByName";
import { listsAgentController } from "../../../../modules/Agents/UseCases/ListAgents";
import { findAgentsBySkillsController } from "../../../../modules/Agents/UseCases/FindAgentBySkill";
import { findAgentsByVocationController } from "../../../../modules/Agents/UseCases/FindAgentsByVocations";
import { updatePublicationAgentController } from "../../../../modules/Agents/UseCases/UpdatePublicationAgent";
import { listAllPublicationsAgentsController } from "../../../../modules/Agents/UseCases/ListAllPublicationsAgents";
import { listPublicatonsByIdAgentController } from "../../../../modules/Agents/UseCases/ListPublicationByAgentName";
import { toCancelSponsorAgentController } from "../../../../modules/Agents/UseCases/ToCancelSponsorAgent";
import { listSponsorAgentController } from "../../../../modules/Agents/UseCases/ListSponsorsAgent";
import { createColabAgentController } from "../../../../modules/Agents/UseCases/CreateColab";
import { toCancelColabAgentController } from "../../../../modules/Agents/UseCases/ToCancelColabAgent";
import { listColabsAgentController } from "../../../../modules/agents/UseCases/ListColabsAgent";


const agent = Router()

const upload_image_profile = multer(uploadConfig)
const uploadPhotosAgent = multer(uploadConfig)


agent.get("/",async  (request, response) => {
 await  listsAgentController.handle(request,response)

})

agent.get("/:name",  (request, response) => {
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
agent.get("/listColabsAgent", (request, response) => {
  listColabsAgentController.handle(request,response)
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
agent.delete("/toCancelColabAgent",async (request, response) => {
  await toCancelColabAgentController.handle(request,response)
})
export {agent}
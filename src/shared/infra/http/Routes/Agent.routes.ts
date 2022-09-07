
import {   Router} from "express";
import multer, { } from "multer";
import { createNewSponsorAgentController } from "../../../../modules/Agents/UseCases/CreateNewSponsorAgent";
import { createPublicationAgentController } from "../../../../modules/Agents/UseCases/CreatePublicationAgent";
import { deactivateAgentController } from "../../../../modules/Agents/UseCases/DeactivateAgent";
import { findyByInterestController } from "../../../../modules/Agents/UseCases/FindByInterest";
import { updateAgentController } from "../../../../modules/Agents/UseCases/UpdateAgent";
import { updateImageAgentController } from "../../../../modules/Agents/UseCases/UpdateAgentAvatar";
import uploadConfig from '../../../../config/upload'
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
import { listColabsAgentController } from "../../../../modules/Agents/UseCases/ListColabsAgent";
import { listJourneyAgentController } from "../../../../modules/Agents/UseCases/ListJourneysAgentUseCase";
import { deletedJourneyAgentController } from "../../../../modules/Agents/UseCases/DeleteJourneyAgent";
import { listAgentsSponsorController } from "../../../../modules/Agents/UseCases/ListAgentsSponsor";
import { listAgentsColabController } from "../../../../modules/Agents/UseCases/ListAgentsColab";
import { listPublicationAgentController } from "../../../../modules/Agents/UseCases/ListPublicationAgent";
import { deletePublicationAgentController } from "../../../../modules/Agents/UseCases/DeletePublicationAgent";
import { createCardAgentController } from "../../../../modules/Agents/UseCases/CreateCardAgent";
import { findCardAgentController } from "../../../../modules/Agents/UseCases/FindCardAgent";
import { editCardAgentController } from "../../../../modules/Agents/UseCases/EditCardAgent";
import { deletedCardAgentController } from "../../../../modules/Agents/UseCases/DeleteCardAgent";

const agent = Router()
const upload_image_profile = multer(uploadConfig)
const uploadPhotosAgent = multer(uploadConfig)

agent.get("/",async  (request, response) => {
 await  listsAgentController.handle(request,response)
})

agent.get("/findByname", async (request, response) => {
   await findAgentByNameController.handle(request,response)
})

agent.get("/findBySkill", async(request, response) => {
 await  findAgentsBySkillsController.handle(request,response)
})
agent.get("/FindByVocation",async (request, response) => {
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

agent.get("/sponsorsAgent",async (request, response) => {
  await listSponsorAgentController.handle(request,response)
})
agent.get("/agentsSponsor",async (request, response) => {
  await listAgentsSponsorController.handle(request,response)
})

agent.post("/sponsorAgent",async (request, response) => {
  await createNewSponsorAgentController.handle(request,response)
})

agent.get("/colabsAgent", async (request, response) => {
  await  listColabsAgentController.handle(request,response)
})
agent.get("/agentsColab", async (request, response) => {
  await  listAgentsColabController.handle(request,response)
})

agent.get("/listPublications",async (request, response) => {
  await listPublicationAgentController.handle(request,response)
})
agent.get("/findCard",async (request, response) => {
  await findCardAgentController.handle(request,response)
})

agent.post("/journeyAgent",async (request, response) => {
  await listJourneyAgentController.handle(request,response)
})
agent.post("/", async (request, response) => {
   await createAgentController().handle(request,response)
})

agent.post("/photoPublication", uploadPhotosAgent.array('photos', 3), async (request, response) => {
 await createPublicationAgentController.handle(request,response)
})
agent.post("/colabAgent", async (request, response) => {
  await createColabAgentController.handle(request,response)
 })

 agent.post("/cardAgent", async (request, response) => {
  await createCardAgentController.handle(request,response)
 })

agent.patch("/imageProfile", upload_image_profile.single("image_profile"),async (request, response) => {
  await updateImageAgentController.handle(request,response)
})
agent.patch("/updatePublication",async (request, response) => {
  await  updatePublicationAgentController.handle(request,response)
})
agent.patch("/editCard",async (request, response) => {
  await  editCardAgentController.handle(request,response)
})
agent.put("/",async  (request, response) => {

  await updateAgentController.handle(request,response)
})

agent.delete("/",async  (request, response) => {
  await deactivateAgentController.handle(request,response)
})
agent.delete("/sponsorAgent",async (request, response) => {
  await toCancelSponsorAgentController.handle(request,response)
})
agent.delete("/colabAgent",async (request, response) => {
  await toCancelColabAgentController.handle(request,response)
})
agent.delete("/deleteJourneyAgent",async (request, response) => {
  await deletedJourneyAgentController.handle(request,response)
})
agent.delete("/deletePublication",async (request, response) => {
  await deletePublicationAgentController.handle(request,response)
})

agent.delete("/deleteCard",async (request, response) => {
  await deletedCardAgentController.handle(request,response)
})
export {agent}

import {   Router} from "express";
import multer, { } from "multer";
import  createNewSponsorAgentController  from "../../../../modules/Agents/UseCases/CreateNewSponsorAgent";
import createPublicationAgentController from "../../../../modules/Agents/UseCases/CreatePublicationAgent";
import  deactivateAgentController   from "../../../../modules/Agents/UseCases/DeactivateAgent";
import  findyByInterestController  from "../../../../modules/Agents/UseCases/FindByInterest";
import  updateAgentController  from "../../../../modules/Agents/UseCases/UpdateAgent";
import  updateImageAgentController from "../../../../modules/Agents/UseCases/UpdateAgentAvatar";
import uploadConfig from '../../../../config/upload'
import createAgentController from '../../../../modules/Agents/UseCases/CreateAgent/index'
import  findAgentByNameController  from "../../../../modules/Agents/UseCases/FindAgentByName";
import listsAgentController from "../../../../modules/Agents/UseCases/ListAgents";
import  findAgentsBySkillsController from "../../../../modules/Agents/UseCases/FindAgentBySkill";
import  findAgentsByVocationController  from "../../../../modules/Agents/UseCases/FindAgentsByVocations";
import  updatePublicationAgentController  from "../../../../modules/Agents/UseCases/UpdatePublicationAgent";
import  listAllPublicationsAgentsController  from "../../../../modules/Agents/UseCases/ListAllPublicationsAgents";
import  listPublicatonsByIdAgentController  from "../../../../modules/Agents/UseCases/ListPublicationByAgentName";
import toCancelSponsorAgentController  from "../../../../modules/Agents/UseCases/ToCancelSponsorAgent";
import  listSponsorAgentController  from "../../../../modules/Agents/UseCases/ListSponsorsAgent";
import createColabAgentController from "../../../../modules/Agents/UseCases/CreateColab";
import  toCancelColabAgentController  from "../../../../modules/Agents/UseCases/ToCancelColabAgent";
import  listColabsAgentController  from "../../../../modules/Agents/UseCases/ListColabsAgent";
import  listJourneyAgentController  from "../../../../modules/Agents/UseCases/ListJourneysAgentUseCase";
import  deletedJourneyAgentController from "../../../../modules/Agents/UseCases/DeleteJourneyAgent";
import  listAgentsColabController  from "../../../../modules/Agents/UseCases/ListAgentsColab";
import  listPublicationAgentController  from "../../../../modules/Agents/UseCases/ListPublicationAgent";
import  deletePublicationAgentController  from "../../../../modules/Agents/UseCases/DeletePublicationAgent";
import  createCardAgentController  from "../../../../modules/Agents/UseCases/CreateCardAgent";
import  findCardAgentController  from "../../../../modules/Agents/UseCases/FindCardAgent";
import  editCardAgentController  from "../../../../modules/Agents/UseCases/EditCardAgent";
import  deletedCardAgentController  from "../../../../modules/Agents/UseCases/DeleteCardAgent";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import  listAgentsSponsorController  from "../../../../modules/Agents/UseCases/ListAgentsSponsor";
import  feedColabController  from "../../../../modules/Agents/UseCases/FeedColab";
import fetchAgentProfileController  from "../../../../modules/Agents/UseCases/FetchAgentProfile";

const agent = Router()
const upload_image_profile = multer(uploadConfig)
const uploadPhotosAgent = multer(uploadConfig)

agent.get("/",async  (request, response) => {
 return await   listsAgentController().handle(request,response)
})

agent.post("/findByname", async (request, response) => {
   return await  findAgentByNameController().handle(request,response)
})

agent.get("/findBySkill", async(request, response) => {
 return await   findAgentsBySkillsController().handle(request,response)
})
agent.get("/FindByVocation",async (request, response) => {
  return await  findAgentsByVocationController().handle(request,response)
})

agent.get("/findByInterest", async (request, response) => {
  return await  findyByInterestController().handle(request,response)

})
agent.get("/allPublications",  (request, response) => {
   listAllPublicationsAgentsController().handle(request,response)
})
agent.get("/publications",  (request, response) => {
  listPublicatonsByIdAgentController().handle(request,response)
})

agent.get("/sponsorsAgent",async (request, response) => {
  return await  listSponsorAgentController().handle(request,response)
})
agent.get("/agentsSponsor",async (request, response) => {
  return await  listAgentsSponsorController().handle(request,response)
})

agent.get("/colabsAgent", async (request, response) => {
  return await   listColabsAgentController().handle(request,response)
})
agent.get("/agentsColab", async (request, response) => {
  return await   listAgentsColabController().handle(request,response)
})

agent.get("/listPublications",async (request, response) => {
  return await  listPublicationAgentController().handle(request,response)
})
agent.get("/findCard",async (request, response) => {
  return await  findCardAgentController().handle(request,response)
})

agent.get("/journey", async (request, response) => {
  return await  listJourneyAgentController().handle(request,response)
})


agent.post("/", async (request, response) => {
   return await  createAgentController().handle(request,response)
})
agent.post("/sponsorAgent",ensureAuthenticate, async (request, response) => {
  return await  createNewSponsorAgentController().handle(request,response)
})

agent.post("/photoPublication",ensureAuthenticate, uploadPhotosAgent.array('photos', 3), async (request, response) => {
 return await  createPublicationAgentController().handle(request,response)
})
agent.post("/colabAgent",ensureAuthenticate, async (request, response) => {
  return await  createColabAgentController().handle(request,response)
 })

 agent.post("/feedColab", async (request, response) => {
  return await  feedColabController().listFeedColab(request,response)
 })

 agent.post("/cardAgent",ensureAuthenticate, async (request, response) => {
  return await  createCardAgentController().handle(request,response)
 })

 agent.post("/fetchAgentProfile",async (request, response) => {
  return await  fetchAgentProfileController().handle(request,response)
 })

agent.patch("/imageProfile",ensureAuthenticate, upload_image_profile.single("image_profile"),async (request, response) => {
  return await  updateImageAgentController().handle(request,response)
})
agent.patch("/updatePublication",ensureAuthenticate,async (request, response) => {
  return await   updatePublicationAgentController().handle(request,response)
})
agent.patch("/editCard",ensureAuthenticate,async (request, response) => {
  return await   editCardAgentController().handle(request,response)
})
agent.patch("/",ensureAuthenticate,async  (request, response) => {

  return await  updateAgentController().handle(request,response)
})

agent.delete("/",ensureAuthenticate,async  (request, response) => {
  return await  deactivateAgentController().handle(request,response)
})
agent.delete("/sponsorAgent",ensureAuthenticate, async (request, response) => {
  return await  toCancelSponsorAgentController().handle(request,response)
})
agent.delete("/colabAgent",ensureAuthenticate,async (request, response) => {
  return await  toCancelColabAgentController().handle(request,response)
})
agent.delete("/journey",async (request, response) => {
  return await  deletedJourneyAgentController().handle(request,response)
})
agent.delete("/deletePublication",ensureAuthenticate,async (request, response) => {
  return await  deletePublicationAgentController().handle(request,response)
})

agent.delete("/deleteCard",ensureAuthenticate,async (request, response) => {
  return await  deletedCardAgentController().handle(request,response)
})
export {agent}
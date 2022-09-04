import { Router } from "express";
import { createAgentMissionController } from "../../../../modules/Missions/UseCases/CreateAgentMission";
import { createMissionController } from "../../../../modules/Missions/UseCases/CreateMission";
import { createSponsorMissionController } from "../../../../modules/Missions/UseCases/CreateSponsorMission";
import { deactivateMisionController } from "../../../../modules/Missions/UseCases/DeactiveMission";
import { deleteAgentMissionController } from "../../../../modules/Missions/UseCases/DeleteColabMission";
import { deleteSponsorMissionController } from "../../../../modules/Missions/UseCases/DeleteSponsorMission";
import { findMissionByNameController } from "../../../../modules/Missions/UseCases/FindMissionByName";
import { findMissionsByFieldController } from "../../../../modules/Missions/UseCases/FindMissionsByField";
import { findMissionsByLocalController } from "../../../../modules/Missions/UseCases/FindMissionsByLocal";
import { listAgentsMissionController } from "../../../../modules/Missions/UseCases/ListAgentsMission";
import { listMissionController } from "../../../../modules/Missions/UseCases/ListMission";
import { listMissionsAgentController } from "../../../../modules/Missions/UseCases/ListMissionsAgent";
import { listmissionsSponsorsController } from "../../../../modules/Missions/UseCases/ListMissionsSponsor";
import { listsponsorsMissionsController } from "../../../../modules/Missions/UseCases/ListSponsorsMission";
import { updateMissionController } from "../../../../modules/Missions/UseCases/UpdateMission";


const mission = Router()

mission.post("/", async (request, response) => {
  await createMissionController.handle(request,response)
})

mission.post("/createAgentMission", async (request, response) => {
  await createAgentMissionController.handle(request,response)
})
mission.post("/createSponsorMission", async (request, response) => {
  await createSponsorMissionController.handle(request,response)
})

mission.get("/", (request, response) => {
  listMissionController.handle(request,response)
})
mission.get("/ListAgentsMission", async (request, response) => {
 await  listAgentsMissionController.handle(request,response)
})
mission.get("/ListMissionsAgent", async (request, response) => {
  await  listMissionsAgentController.handle(request,response)
 })
mission.get("/findMissionByName/:name?", async(request, response) => {
  await findMissionByNameController.handle(request,response)
})
mission.get("/findMissionsByField/:field?", async(request, response) => {
   await findMissionsByFieldController.handle(request,response)
})

mission.get("/findMissionsByLocal/:local?", async(request, response) => {
  await findMissionsByLocalController.handle(request,response)
})
mission.get("/listSponsorsMission", async(request, response) => {
  await listsponsorsMissionsController.handle(request,response)
})
mission.get("/listMissionsSponsors", async(request, response) => {
  await listmissionsSponsorsController.handle(request,response)
})

mission.patch("/updateMission", async (request, response) => {
  await updateMissionController.handle(request,response)
})

mission.delete("/deactivateMission", async (request, response) => {
  await deactivateMisionController.handle(request,response)
})
mission.delete("/deleteAgentMission", async (request, response) => {
  await deleteAgentMissionController.handle(request,response)
})
mission.delete("/deleteSponsorMission", async (request, response) => {
  await deleteSponsorMissionController.handle(request,response)
})
export {mission}
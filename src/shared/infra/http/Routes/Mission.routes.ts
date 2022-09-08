import { Router } from "express";
import multer from "multer";
import { createAdminMissionController } from "../../../../modules/Missions/UseCases/CreateAdminMission";
import { createAgentMissionController } from "../../../../modules/Missions/UseCases/CreateAgentMission";
import { createMissionController } from "../../../../modules/Missions/UseCases/CreateMission";
import { createPublicationMissionController } from "../../../../modules/Missions/UseCases/CreatePublicationMission";
import { createSponsorMissionController } from "../../../../modules/Missions/UseCases/CreateSponsorMission";
import { deactivateMisionController } from "../../../../modules/Missions/UseCases/DeactiveMission";
import { deleteAdminMissionController } from "../../../../modules/Missions/UseCases/DeleteAdminMission";
import { deleteAgentMissionController } from "../../../../modules/Missions/UseCases/DeleteAgentMission";
import { deleteSponsorMissionController } from "../../../../modules/Missions/UseCases/DeleteSponsorMission";
import { findMissionByNameController } from "../../../../modules/Missions/UseCases/FindMissionByName";
import { findMissionsByFieldController } from "../../../../modules/Missions/UseCases/FindMissionsByField";
import { findMissionsByLocalController } from "../../../../modules/Missions/UseCases/FindMissionsByLocal";
import { listAdminsMissionControler } from "../../../../modules/Missions/UseCases/ListAdminsMission";
import { listAgentsMissionController } from "../../../../modules/Missions/UseCases/ListAgentsMission";
import { listMissionController } from "../../../../modules/Missions/UseCases/ListMission";
import { listMissionsAgentController } from "../../../../modules/Missions/UseCases/ListMissionsAgent";
import { listmissionsSponsorsController } from "../../../../modules/Missions/UseCases/ListMissionsSponsor";
import { listsponsorsMissionsController } from "../../../../modules/Missions/UseCases/ListSponsorsMission";
import { updateAdminMissionController } from "../../../../modules/Missions/UseCases/UpdateAdminMission";
import { updateMissionController } from "../../../../modules/Missions/UseCases/UpdateMission";
import uploadConfig from '../../../../config/upload'
import { listPublicationMissionController } from "../../../../modules/Missions/UseCases/ListPublicationsMission";
import { updatePublicationMissionController } from "../../../../modules/Missions/UseCases/EditPublicationMission";
const mission = Router()
const uploadPhotosMission = multer(uploadConfig)

mission.post("/", async (request, response) => {
  await createMissionController.handle(request,response)
})

mission.post("/agent", async (request, response) => {
  await createAgentMissionController.handle(request,response)
})
mission.post("/sponsor", async (request, response) => {
  await createSponsorMissionController.handle(request,response)
})
mission.post("/admin", async (request, response) => {
  await createAdminMissionController.handle(request,response)
})
mission.post("/publication",uploadPhotosMission.array('photos', 3) ,async (request, response) => {
  await createPublicationMissionController.handle(request,response)
})
mission.get("/", (request, response) => {
  listMissionController.handle(request,response)
})
mission.get("/agents", async (request, response) => {
 await  listAgentsMissionController.handle(request,response)
})
mission.get("/missionsAgent", async (request, response) => {
  await  listMissionsAgentController.handle(request,response)
 })
mission.get("/findByName/:name?", async(request, response) => {
  await findMissionByNameController.handle(request,response)
})
mission.get("/findByField/:field?", async(request, response) => {
   await findMissionsByFieldController.handle(request,response)
})

mission.get("/findByLocal/:local?", async(request, response) => {
  await findMissionsByLocalController.handle(request,response)
})
mission.get("/sponsors", async(request, response) => {
  await listsponsorsMissionsController.handle(request,response)
})
mission.get("/missionSponsor", async(request, response) => {
  await listmissionsSponsorsController.handle(request,response)
})
mission.get("/admin", async(request, response) => {
  await listAdminsMissionControler.handle(request,response)
})
mission.get("/publications", async(request, response) => {
  await listPublicationMissionController.handle(request,response)
})

mission.patch("/", async (request, response) => {
  await updateMissionController.handle(request,response)
})
mission.patch("/admin", async (request, response) => {
  await updateAdminMissionController.handle(request,response)
})
mission.patch("/publication", async (request, response) => {
  await updatePublicationMissionController.handle(request,response)
})

mission.delete("/deactivateMission", async (request, response) => {
  await deactivateMisionController.handle(request,response)
})
mission.delete("/agent", async (request, response) => {
  await deleteAgentMissionController.handle(request,response)
})
mission.delete("/sponsor", async (request, response) => {
  await deleteSponsorMissionController.handle(request,response)
})
mission.delete("/admin", async (request, response) => {
  await deleteAdminMissionController.handle(request,response)
})
export {mission}
import { Router } from "express";
import { createAgentMissionController } from "../../../../modules/missions/UseCases/CreateAgentMission";
import { createMissionController } from "../../../../modules/missions/UseCases/CreateMission";
import { deactivateMisionController } from "../../../../modules/missions/UseCases/DeactiveMission";
import { findMissionByNameController } from "../../../../modules/missions/UseCases/FindMissionByName";
import { findMissionsByFieldController } from "../../../../modules/missions/UseCases/FindMissionsByField";
import { findMissionsByLocalController } from "../../../../modules/missions/UseCases/FindMissionsByLocal";
import { listAgentsMissionController } from "../../../../modules/missions/UseCases/ListAgentsMission";
import { listMissionController } from "../../../../modules/missions/UseCases/ListMission";
import { updateMissionController } from "../../../../modules/missions/UseCases/UpdateMission";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const mission = Router()

mission.post("/", async (request, response) => {
  await createMissionController.handle(request,response)
})

mission.post("/createAgentMission", async (request, response) => {
  await createAgentMissionController.handle(request,response)
})

mission.get("/", (request, response) => {
  listMissionController.handle(request,response)
})
mission.get("/ListAgentsMission", async (request, response) => {
 await  listAgentsMissionController.handle(request,response)
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

mission.patch("/updateMission", async (request, response) => {
  await updateMissionController.handle(request,response)
})

mission.delete("/deactivateMission", async (request, response) => {
  await deactivateMisionController.handle(request,response)
})

export {mission}
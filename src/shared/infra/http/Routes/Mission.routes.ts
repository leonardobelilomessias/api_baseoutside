import { Router } from "express";
import { createMissionController } from "../../../../modules/missions/UseCases/CreateMission";
import { findMissionByNameController } from "../../../../modules/missions/UseCases/FindMissionByName";
import { findMissionsByFieldController } from "../../../../modules/missions/UseCases/FindMissionsByField";
import { findMissionsByLocalController } from "../../../../modules/missions/UseCases/FindMissionsByLocal";
import { listMissionController } from "../../../../modules/missions/UseCases/ListMission";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const mission = Router()

mission.post("/", async (request, response) => {
  await createMissionController.handle(request,response)
})

mission.get("/", (request, response) => {
  listMissionController.handle(request,response)
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


export {mission}
import { Router } from "express";
import { createMissionController } from "../../../../modules/missions/UseCases/CreateMission";
import { findMissionByNameController } from "../../../../modules/missions/UseCases/FindMissionByName";
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

export {mission}
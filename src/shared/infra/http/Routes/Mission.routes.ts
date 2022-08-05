import { Router } from "express";
import { createMissionController } from "../../../../modules/missions/UseCases/CreateMission";
import { listMissionController } from "../../../../modules/missions/UseCases/ListMission";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";


const mission = Router()

mission.post("/", (request, response) => {
  createMissionController.handle(request,response)
})

mission.get("/", (request, response) => {
  listMissionController.handle(request,response)
})

export {mission}
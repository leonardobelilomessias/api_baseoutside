import { Router } from "express";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";
import { createMissionController } from "../modules/Missions/UseCases/CreateMission";
import { listMissionController } from "../modules/Missions/UseCases/ListMission";

const mission = Router()

mission.post("/", (request, response) => {
  createMissionController.handle(request,response)
})

mission.get("/",ensureAuthenticate, (request, response) => {
  listMissionController.handle(request,response)
})

export {mission}
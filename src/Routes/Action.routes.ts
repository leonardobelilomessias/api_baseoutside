import { Router } from "express";
import { createActionController } from "../modules/Actions/UseCases/CreateActionUseCase";
import { listActionController } from "../modules/Actions/UseCases/ListActionUseCase";

const action = Router()

action.post("/", (request, response) => {
  createActionController.handle(request,response)
})

action.get("/", (request, response) => {
  listActionController.handle(request,response)
})

export {action}